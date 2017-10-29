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

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AuthCodeParams;
import com.thinker.cal.service.WeiChatAuthService;

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

	private WeiChatAuthService weiChatAuthService;

	@RequestMapping("/authbind")
	public void oauthBind(HttpServletRequest request, HttpServletResponse response) throws Exception {
		AuthCodeParams authCodeParams = new AuthCodeParams();
		String redirect_uri = "http://www.liebesy.com/auth/authbind.html";
		authCodeParams.setRedirect_uri(redirect_uri);
		authCodeParams.setAppid(WeiChatConfig.APP_ID);
		authCodeParams.setScope(AuthCodeParams.SCOPE_SNSAPIBASE);// 采用静默授权
		authCodeParams.setState(4 + ""); // 防止被攻击,用于校验
		String url = weiChatAuthService.getAuthPath(authCodeParams, WeiChatConfig.OAUTH_AUTHORIZE_URL);
	}

	@RequestMapping("/test")
	public String test() {

		return "/auth/authbind";

	}

}
