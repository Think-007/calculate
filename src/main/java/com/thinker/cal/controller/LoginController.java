package com.thinker.cal.controller;

import java.util.List;

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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthCodeParams;
import com.thinker.cal.domain.AuthTokenParams;
import com.thinker.cal.domain.AuthUserInfo;
import com.thinker.cal.domain.Court;
import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.service.GolfPlaceService;
import com.thinker.cal.service.UserInfoService;
import com.thinker.cal.service.WeiChatAuthService;
import com.thinker.cal.util.CalConst;
import com.thinker.cal.util.CalLog;
import com.thinker.creator.domain.ProcessResult;

@Controller
@RequestMapping("/gate")
public class LoginController {

	private static final Logger logger = LoggerFactory
			.getLogger(AuthController.class);

	// 回调域名地址
	@Value("${callback.host}")
	private String host;

	// 拉取微信信息业务
	@Resource
	private WeiChatAuthService weiChatAuthService;

	// 本地用户信息业务
	@Resource
	private UserInfoService userInfoService;

	// 场地信息
	@Resource
	private GolfPlaceService golfPlaceService;

	// 登录跳转统一页面
	@RequestMapping("/homepage")
	public String tohome() {

		return "/";
	}

	// 获取用户微信授权码code
	@RequestMapping("/mainpage")
	public String mainPage() {

		CalLog.info(logger, "enter authBind", null, null);

		String url = null;
		try {
			AuthCodeParams authCodeParams = new AuthCodeParams();
			String redirect_uri = host + "/gate/authtoken/";
			authCodeParams.setRedirect_uri(redirect_uri);
			authCodeParams.setAppid(WeiChatConfig.APP_ID);
			authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);
			authCodeParams.setState(4 + "");
			url = weiChatAuthService.getAuthPath(authCodeParams,
					WeiChatConfig.OAUTH_AUTHORIZE_URL);

			CalLog.info(logger, "authBind", null, "url: " + url);

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
	public ProcessResult toeknAuth(HttpServletRequest request,
			HttpServletResponse response) {
		CalLog.info(logger, "enter toeknAuth", null, null);
		ProcessResult processResult = new ProcessResult();
		try {
			// 1、拿到code
			String code = request.getParameter("code");
			AuthTokenParams authTokenParams = new AuthTokenParams();
			authTokenParams.setAppid(WeiChatConfig.APP_ID);
			authTokenParams.setCode(code);
			authTokenParams.setSecret(WeiChatConfig.APP_SECRET);
			CalLog.debug(logger, "toeknAuth", null, "authTokenParams : "
					+ authTokenParams);
			// 2、请求token
			AuthAccessToken authAccessToken = weiChatAuthService
					.getAuthAccessToken(authTokenParams,
							WeiChatConfig.OAUTH_ACCESS_TOKEN_URL);
			System.out.println("authAccessToken-->" + authAccessToken);
			// 3、拉取用户信息
			AuthUserInfo authUserInfo = weiChatAuthService.getAuthUserInfo(
					authAccessToken.getAccess_token(),
					authAccessToken.getOpenid());

			CalLog.debug(logger, "toeknAuth", null, "authUserInfo-->"
					+ authUserInfo);
			// 4、根据uid查询用户信息
			LocalUser userInfo = userInfoService.getUserInfoByUid(authUserInfo
					.getOpenid());

			String msg = null;

			if (userInfo == null) {

				processResult.setRetCode(CalConst.USER_NOT_EXIST);
				return processResult;
			} else {

				UsernamePasswordToken token = new UsernamePasswordToken(
						userInfo.getUserid(), userInfo.getPassword());
				token.setRememberMe(true);
				Subject subject = SecurityUtils.getSubject();
				try {
					subject.login(token);
					if (subject.isAuthenticated()) {
						// 5.查询场地信息
						List<Court> courtList = golfPlaceService.getAllCourt();
						processResult.setRetCode(ProcessResult.SUCCESS);
						processResult.setRetObj(courtList);
						return processResult;
					}
				} catch (IncorrectCredentialsException e) {
					msg = "登录密码错误. Password for account "
							+ token.getPrincipal() + " was incorrect.";
					System.out.println(msg);
				} catch (ExcessiveAttemptsException e) {
					msg = "登录失败次数过多";
					System.out.println(msg);
				} catch (LockedAccountException e) {
					msg = "帐号已被锁定. The account for username "
							+ token.getPrincipal() + " was locked.";
					System.out.println(msg);
				} catch (DisabledAccountException e) {
					msg = "帐号已被禁用. The account for username "
							+ token.getPrincipal() + " was disabled.";
					System.out.println(msg);
				} catch (ExpiredCredentialsException e) {
					msg = "帐号已过期. the account for username "
							+ token.getPrincipal() + " was expired.";
					System.out.println(msg);
				} catch (UnknownAccountException e) {
					msg = "帐号不存在. There is no user with username of "
							+ token.getPrincipal();
					System.out.println(msg);
				} catch (UnauthorizedException e) {
					msg = "您没有得到相应的授权！" + e.getMessage();
					System.out.println(msg);
				}

			}

		} catch (Throwable t) {
			processResult.setRetCode(CalConst.EXCEPTION);
			processResult.setRetMsg(CalConst.EXCEPTION_MSG);
			CalLog.error(logger, "toeknAuth", null, processResult, t);
			t.printStackTrace();
		}
		CalLog.info(logger, "finish toeknAuth", null, processResult);
		return processResult;
	}

	@RequestMapping(value = "/spaces", method = RequestMethod.GET)
	@ResponseBody
	public ProcessResult getGolfSpace() {

		CalLog.info(logger, "enter getGolfSpace", null, null);
		ProcessResult processResult = new ProcessResult();

		try {
			List<Court> courtList = golfPlaceService.getAllCourt();
			if (courtList != null) {

				processResult.setRetCode(ProcessResult.SUCCESS);
				processResult.setRetMsg("ok");
				processResult.setRetObj(courtList);
			}
		} catch (Throwable t) {
			processResult.setRetCode(CalConst.EXCEPTION);
			processResult.setRetMsg(CalConst.EXCEPTION_MSG);
			CalLog.error(logger, "getGolfSpace", null, processResult, t);
			t.printStackTrace();

		}

		CalLog.info(logger, "finish getGolfSpace", null, processResult);
		return processResult;

	}

}
