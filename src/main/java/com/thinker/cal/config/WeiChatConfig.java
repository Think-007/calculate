/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.config;

/**
 * 
 * 微信鉴权配置类
 * 
 * <p>
 * 类详细描述
 * </p>
 * 
 * @author LPF
 * 
 */
public class WeiChatConfig {

	public static final String APP_ID = "wx66afd557ddb52ff8";// "wx25edffe046b6ddde";
	public static final String APP_SECRET = "d13a82eff0fa65c40a67c8ea0c6e5477";// "987167a421ee115fa923e2fdf0b4db43";
	public static final String WECHAT_TOKEN = "xx";// 服务号的Token令牌
	// 授权链接
	public static final String OAUTH_AUTHORIZE_URL = "https://open.weixin.qq.com/connect/oauth2/authorize";
	// 获取token的链接
	public static final String OAUTH_ACCESS_TOKEN_URL = "https://api.weixin.qq.com/sns/oauth2/access_token";
	// 刷新token
	public static final String OAUTH_REFRESH_TOKEN_URL = "https://api.weixin.qq.com/sns/oauth2/refresh_token";
	// 获取授权用户信息
	public static final String SNS_USERINFO_URL = "https://api.weixin.qq.com/sns/userinfo";
	// 判断用户accessToken是否有效
	public static final String SNS_AUTH_URL = "https://api.weixin.qq.com/sns/auth";

}
