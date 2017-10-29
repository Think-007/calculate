/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.service;

import com.thinker.cal.domain.AbstractParams;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthUserInfo;

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

public interface WeiChatAuthService {

	/**
	 * 生成鉴权路径
	 * 
	 * @param basic
	 * @param path
	 * @return
	 * @throws Exception
	 */
	public String getAuthPath(AbstractParams basic, String path) throws Exception;

	/**
	 * 获取用户的token
	 * 
	 * @param basic
	 * @param path
	 * @return
	 * @throws Exception
	 */
	public AuthAccessToken getAuthAccessToken(AbstractParams basic, String path) throws Exception;

	/**
	 * 刷新token信息
	 * 
	 * @param basic
	 * @param path
	 * @return
	 */
	public AuthAccessToken refreshAuthAccessToken(AbstractParams basic, String path);
	/**
	 * 获取用户身份信息
	 * 
	 * @param accessToken
	 * @param openId
	 * @return
	 */
	public AuthUserInfo getAuthUserInfo(String accessToken, String openId) throws Exception;


}
