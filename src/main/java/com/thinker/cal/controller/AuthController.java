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

import org.apache.shiro.crypto.hash.Md5Hash;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthCodeParams;
import com.thinker.cal.domain.AuthTokenParams;
import com.thinker.cal.domain.AuthUserInfo;
import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.domain.UserRegistParam;
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

	@RequestMapping("/registration")
	public ModelAndView registUser(HttpServletRequest request,
			HttpServletResponse response, UserRegistParam userRegistParam) {

		CalLog.info(logger, "enter registUser", null, userRegistParam);

		String fromUrl = request.getContextPath();
		System.out.println(fromUrl);
		userRegistParam.setPassword("123456");
		userRegistParam.setTelNum("18201410900");

		ModelAndView mv = new ModelAndView();

		// 1、校验参数信息,验证码等

		// 2、构造用户信息
		LocalUser localUser = new LocalUser();
		localUser.setTelNumber(userRegistParam.getTelNum());
		Md5Hash mh = new Md5Hash(userRegistParam.getPassword(), saltStr,
				hashIterations);
		localUser.setPawssword(mh.toString());

		CalLog.debug(logger, "registUser", null, localUser);

		// 3、注册用户到数据库
		mv.setViewName("/index");

		return mv;
	}

	// 绑定用户信息请求code
	@RequestMapping("/authbind")
	public String authBind(HttpServletRequest request,
			HttpServletResponse response) {
		CalLog.info(logger, "enter authBind", null, null);

		String url = null;
		try {
			AuthCodeParams authCodeParams = new AuthCodeParams();
			String redirect_uri = "http://662fc384.ngrok.io/weichat/authtoken";
			authCodeParams.setRedirect_uri(redirect_uri);
			authCodeParams.setAppid(WeiChatConfig.APP_ID);
			authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);
			authCodeParams.setState(4 + "");
			url = weiChatAuthService.getAuthPath(authCodeParams,
					WeiChatConfig.OAUTH_AUTHORIZE_URL);

			System.out.println("url : " + url);

			// CalLog.debug(logger, "authBind", null, "url: " + url);

		} catch (Exception e) {
			e.printStackTrace();
		}
		CalLog.info(logger, "finish authBind", null, null);

		return "redirect:" + url;
	}

	/**
	 * 拿到code后请求token，并携带token拉取用户信息、注册用户，如果存在就不处理。
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("/authtoken")
	public String toeknAuth(HttpServletRequest request,
			HttpServletResponse response) {
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
			// 4、查询用户是否存在，不存在跳转到注册页面

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 4、返回计分器主页面
		return "/scorer/scorepad";
	}

	@RequestMapping("/test")
	public String test() {

		return "/scorer/scorepad";

	}

}
