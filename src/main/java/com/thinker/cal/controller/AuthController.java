/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.ExpiredCredentialsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.UnauthorizedException;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
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
import com.thinker.cal.service.UserInfoService;
import com.thinker.cal.service.WeiChatAuthService;
import com.thinker.cal.util.CalLog;

/**
 * 
 * 类简要描述
 * 
 * <p>
 * 类详细描述
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
	// @Value("${shiro.salt}")
	private String saltStr = "333";
	// 加盐次数
	@Value("${salt.hashIterations}")
	private int hashIterations = 3;
	@Resource
	private WeiChatAuthService weiChatAuthService;

	private UserInfoService userInfoService;

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
			localUser.setPawssword(userRegistParam.getPassword());
			localUser.setSalt(saltStr);

			CalLog.debug(logger, "registUser", null, localUser);

			// 3、用户信息暂时存储到redis

			// 4、请求访问用户微信信息授权码
			CalLog.info(logger, "req weicaht code", null, null);

			AuthCodeParams authCodeParams = new AuthCodeParams();
			String redirect_uri = "http://e51ef162.ngrok.io/weichat/authtoken/18201410900";
			authCodeParams.setRedirect_uri(redirect_uri);
			authCodeParams.setAppid(WeiChatConfig.APP_ID);
			authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);
			authCodeParams.setState(4 + "");
			url = weiChatAuthService.getAuthPath(authCodeParams,
					WeiChatConfig.OAUTH_AUTHORIZE_URL);
			CalLog.debug(logger, "registUser", null, "url: " + url);
			mv.setViewName("redirect:" + url);

		} catch (Exception t) {

			mv.addObject("ex", t);
			mv.setViewName("/home");
			t.printStackTrace();
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
	public ModelAndView toeknAuth(HttpServletRequest request,
			HttpServletResponse response,
			@PathVariable("telnum") String telNumber) {

		System.out.println(telNumber);

		ModelAndView mv = new ModelAndView();
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
			LocalUser userInfo = new LocalUser();// userInfoService.getUserInfoByUid("");

			userInfo.setUserid(authUserInfo.getOpenid());
			userInfo.setHeadURL(authUserInfo.getHeadimgurl());
			userInfo.setUserName("18201410900");
			userInfo.setPawssword("123456");
			mv.setViewName("/scorer/scorepad");

			// if (userInfo == null) {
			// mv.setViewName("/home");
			// return mv;
			// } else {
			//
			// String msg = "";
			// String userName = userInfo.getTelNumber();
			// String password = userInfo.getPawssword();
			// System.out.println(userName);
			// System.out.println(password);
			// UsernamePasswordToken token = new UsernamePasswordToken(
			// userName, password);
			// token.setRememberMe(true);
			// Subject subject = SecurityUtils.getSubject();
			// try {
			// subject.login(token);
			// if (subject.isAuthenticated()) {
			// mv.addObject(userInfo);
			// mv.setViewName("/scorer/scorepad");
			// return mv;
			// }
			// } catch (IncorrectCredentialsException e) {
			// msg = "登录密码错误. Password for account "
			// + token.getPrincipal() + " was incorrect.";
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (ExcessiveAttemptsException e) {
			// msg = "登录失败次数过多";
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (LockedAccountException e) {
			// msg = "帐号已被锁定. The account for username "
			// + token.getPrincipal() + " was locked.";
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (DisabledAccountException e) {
			// msg = "帐号已被禁用. The account for username "
			// + token.getPrincipal() + " was disabled.";
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (ExpiredCredentialsException e) {
			// msg = "帐号已过期. the account for username "
			// + token.getPrincipal() + "  was expired.";
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (UnknownAccountException e) {
			// msg = "帐号不存在. There is no user with username of "
			// + token.getPrincipal();
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// } catch (UnauthorizedException e) {
			// msg = "您没有得到相应的授权！" + e.getMessage();
			// mv.addObject("msg", msg);
			// System.out.println(msg);
			// }
			//
			// }

		} catch (Throwable t) {
			mv.addObject("ex", t);
			mv.setViewName("/home");
			t.printStackTrace();
		}
		return mv;
	}

	@RequestMapping("/test")
	public String test() {

		return "/scorer/scorepad";

	}

	@RequestMapping("/testindex")
	public ModelAndView testindex() {

		ModelAndView mv = new ModelAndView();
		mv.addObject("msg", "返回的信息");
		mv.setViewName("redirect:/");
		return mv;

	}

	@RequestMapping("/testhome")
	public ModelAndView testhome() {

		ModelAndView mv = new ModelAndView();
		mv.addObject("msg", "返回的信息");
		mv.setViewName("/home");
		return mv;

	}
}
