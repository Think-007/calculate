package com.thinker.cal.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.ExpiredCredentialsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.UnauthorizedException;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthCodeParams;
import com.thinker.cal.domain.AuthTokenParams;
import com.thinker.cal.domain.AuthUserInfo;
import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.service.WeiChatAuthService;
import com.thinker.cal.util.CalLog;

@Controller
@RequestMapping("/gate")
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Resource
	private WeiChatAuthService weiChatAuthService;

	// 登录跳转同一页面
	@RequestMapping("/homepage")
	public String tohome() {

		return "/home";
	}

	// 获取用户微信授权码code
	@RequestMapping("/mainpage")
	public String mainPage() {

		CalLog.info(logger, "enter authBind", null, null);

		String url = null;
		try {
			AuthCodeParams authCodeParams = new AuthCodeParams();
			String redirect_uri = "http://e51ef162.ngrok.io/weichat/authtoken";
			authCodeParams.setRedirect_uri(redirect_uri);
			authCodeParams.setAppid(WeiChatConfig.APP_ID);
			authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);
			authCodeParams.setState(4 + "");
			url = weiChatAuthService.getAuthPath(authCodeParams, WeiChatConfig.OAUTH_AUTHORIZE_URL);

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
	@SuppressWarnings("unused")
	@RequestMapping("/authtoken")
	public ModelAndView toeknAuth(HttpServletRequest request, HttpServletResponse response) {

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
			AuthAccessToken authAccessToken = weiChatAuthService.getAuthAccessToken(authTokenParams,
					WeiChatConfig.OAUTH_ACCESS_TOKEN_URL);
			System.out.println("authAccessToken-->" + authAccessToken);
			// 3、拉取用户信息
			AuthUserInfo authUserInfo = weiChatAuthService.getAuthUserInfo(authAccessToken.getAccess_token(),
					authAccessToken.getOpenid());
			System.out.println("authUserInfo-->" + authUserInfo);
			// 4、根据uid查询用户信息
			LocalUser userInfo = new LocalUser();// userInfoService.getUserInfoByUid("");

			userInfo.setUserid(authUserInfo.getOpenid());
			userInfo.setHeadURL(authUserInfo.getHeadimgurl());

			String msg = "场地列表信息";

			if (userInfo == null) {
				mv.setViewName("/home");
				return mv;
			} else {

				UsernamePasswordToken token = new UsernamePasswordToken(userInfo.getUserid(), userInfo.getPawssword());
				token.setRememberMe(true);
				Subject subject = SecurityUtils.getSubject();
				subject.login(token);
				if (subject.isAuthenticated()) {
					mv.addObject("msg", msg);
					mv.setViewName("/scorer/scorepad");
					return mv;
				}

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		mv.setViewName("/home");
		return mv;
	}

	@RequestMapping("/spaces")
	public ModelAndView getGolfSpace() {

		ModelAndView mv = new ModelAndView();

		mv.setViewName("/home");
		return mv;
	}

}
