/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthCodeParams;
import com.thinker.cal.domain.AuthTokenParams;
import com.thinker.cal.domain.AuthUserInfo;
import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.domain.UserRegistParam;
import com.thinker.cal.exception.TelNumberRepeatException;
import com.thinker.cal.service.RegistService;
import com.thinker.cal.service.WeiChatAuthService;
import com.thinker.cal.util.CalConst;
import com.thinker.cal.util.CalLog;
import com.thinker.cal.util.JsonUtils;
import com.thinker.creator.domain.ProcessResult;

/**
 * 
 * 用户信息注册
 * 
 * <p>
 * 根据用户的电话号码，注册用户信息，同时拉取用户微信信息，一并注册
 * </p>
 * 
 * @author LPF
 * 
 */

@Controller
@RequestMapping("/weichat")
public class AuthController {

	private static final Logger logger = LoggerFactory
			.getLogger(AuthController.class);
	// 随机盐值
	@Value("${shiro.salt}")
	private String saltStr;
	// 加盐次数
	@Value("${salt.hashIterations}")
	private int hashIterations = 3;

	// 回调域名地址
	@Value("${callback.host}")
	private String host;
	@Resource
	private WeiChatAuthService weiChatAuthService;

	@Resource
	private RegistService registService;

	public static final Map<Object, Object> cache = new HashMap<Object, Object>();

	@RequestMapping("/registration")
	public ModelAndView registUser(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mv = new ModelAndView();
		UserRegistParam userRegistParam = new UserRegistParam();
		CalLog.info(logger, "enter registUser", null, userRegistParam);
		String url = null;
		try {
			String fromUrl = request.getRequestURL().toString();
			System.out.println(fromUrl);
			userRegistParam.setPassword("123456");
			userRegistParam.setTelNum("18201410900");

			// 1、校验参数信息,验证码等

			// 2、构造用户信息
			LocalUser localUser = new LocalUser();
			localUser.setTelNumber(userRegistParam.getTelNum());
			// Md5Hash mh = new Md5Hash(userRegistParam.getPassword(), saltStr,
			// hashIterations);
			localUser.setPassword(userRegistParam.getPassword());
			localUser.setSalt(saltStr);

			CalLog.debug(logger, "registUser", null, localUser);

			// 3、用户信息暂时存储到缓存
			String tempInfo = JsonUtils.toJson(localUser);
			cache.put(userRegistParam.getTelNum(), tempInfo);

			// 4、请求访问用户微信信息授权码
			CalLog.info(logger, "req weicaht code", null, null);

			AuthCodeParams authCodeParams = new AuthCodeParams();
			String redirect_uri = host + "/weichat/authtoken/"
					+ userRegistParam.getTelNum();
			authCodeParams.setRedirect_uri(redirect_uri);
			authCodeParams.setAppid(WeiChatConfig.APP_ID);
			authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);
			authCodeParams.setState(4 + "");
			url = weiChatAuthService.getAuthPath(authCodeParams,
					WeiChatConfig.OAUTH_AUTHORIZE_URL);
			CalLog.debug(logger, "registUser", null, "url: " + url);
			// throw new RuntimeException();
			mv.setViewName("redirect:" + url);

		} catch (Exception t) {

			mv.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
			mv.addObject("ex", t);
			mv.setViewName("/home");
			t.printStackTrace();
			CalLog.error(logger, "registUser error", null, userRegistParam, t);
		}
		CalLog.info(logger, "finish reqcode", null, null);

		return mv;

	}

	/**
	 * 拿到code后请求token，并携带token拉取用户信息、注册用户，如果存在就不处理。
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("/authtoken/{telnum}")
	public ProcessResult toeknAuth(HttpServletRequest request,
			HttpServletResponse response,
			@PathVariable("telnum") String telNumber) {

		CalLog.info(logger, "enter toeknAuth", null, "telNumber: " + telNumber);

		ProcessResult processResult = new ProcessResult();
		try {
			// 1、拿到code
			String code = request.getParameter("code");
			AuthTokenParams authTokenParams = new AuthTokenParams();
			authTokenParams.setAppid(WeiChatConfig.APP_ID);
			authTokenParams.setCode(code);
			authTokenParams.setSecret(WeiChatConfig.APP_SECRET);
			System.out.println("authTokenParams : " + authTokenParams);
			// 2、请求token
			AuthAccessToken authAccessToken = weiChatAuthService
					.getAuthAccessToken(authTokenParams,
							WeiChatConfig.OAUTH_ACCESS_TOKEN_URL);
			System.out.println("authAccessToken-->" + authAccessToken);
			// 3、拉取用户信息
			AuthUserInfo authUserInfo = weiChatAuthService.getAuthUserInfo(
					authAccessToken.getAccess_token(),
					authAccessToken.getOpenid());
			System.out.println("authUserInfo-->" + authUserInfo);
			// 4、根据电话号码查询用户信息，并更新用户微信信息
			String tempInfo = (String) cache.get(telNumber);
			LocalUser userInfo = JsonUtils.fromJson(tempInfo, LocalUser.class);
			userInfo.setUserid(authUserInfo.getOpenid());
			userInfo.setHeadURL(authUserInfo.getHeadimgurl());
			userInfo.setUserName(authUserInfo.getNickname());
			// 5、数据入库,并查询场地列表信息，返回给页面,保证同一事物
			registService.registAndGetPlace(userInfo);
			cache.remove(userInfo.getTelNumber());
			String msg = "场地列表信息";

			// 6、shiro鉴权，缓存用户状态
			UsernamePasswordToken token = new UsernamePasswordToken(
					userInfo.getUserid(), userInfo.getPassword());
			token.setRememberMe(true);
			Subject subject = SecurityUtils.getSubject();
			try {
				subject.login(token);
				if (subject.isAuthenticated()) {

					processResult.setRetCode(ProcessResult.SUCCESS);
					return processResult;
				}
			} catch (TelNumberRepeatException e) {

				processResult.setRetCode(CalConst.TEL_NUM_REGISTED);
				processResult.setRetMsg("号码已经注册");

			} // catch (IncorrectCredentialsException e1) {
				// msg = "登录密码错误. Password for account " + token.getPrincipal()
				// + " was incorrect.";
				// System.out.println(msg);
				// } catch (ExcessiveAttemptsException e2) {
				// msg = "登录失败次数过多";
				// System.out.println(msg);
				// } catch (LockedAccountException e3) {
				// msg = "帐号已被锁定. The account for username "
				// + token.getPrincipal() + " was locked.";
				// System.out.println(msg);
				// } catch (DisabledAccountException e4) {
				// msg = "帐号已被禁用. The account for username "
				// + token.getPrincipal() + " was disabled.";
				// System.out.println(msg);
				// } catch (ExpiredCredentialsException e5) {
				// msg = "帐号已过期. the account for username " +
				// token.getPrincipal()
				// + " was expired.";
				// System.out.println(msg);
				// } catch (UnknownAccountException e6) {
				// msg = "帐号不存在. There is no user with username of "
				// + token.getPrincipal();
				// System.out.println(msg);
				// } catch (UnauthorizedException e7) {
				// msg = "您没有得到相应的授权！";
				// System.out.println(msg);
				// }

		} catch (Throwable t) {

			processResult.setRetCode(CalConst.EXCEPTION);
			processResult.setRetMsg(CalConst.EXCEPTION_MSG);
			processResult.setRetObj(t);
			t.printStackTrace();
			CalLog.error(logger, "toeknAuth error", null, null, t);
		}
		CalLog.info(logger, "finish toeknAuth", null, processResult);
		return processResult;
	}

}
