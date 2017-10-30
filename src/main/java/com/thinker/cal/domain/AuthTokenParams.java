/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.domain;

import java.io.Serializable;
import java.util.Map;
import java.util.TreeMap;

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

public class AuthTokenParams extends AbstractParams implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// 公众号的唯一标识
	private String appid;
	// 公众号的appsecret
	private String secret;
	// 填写第一步获取的code参数
	private String code;
	// 默认值无需更改
	private String grant_type = "authorization_code";

	public AuthTokenParams() {
		super();
	}

	public AuthTokenParams(String appid, String secret, String code,
			String grant_type) {
		super();
		this.appid = appid;
		this.secret = secret;
		this.code = code;
		this.grant_type = grant_type;
	}

	/**
	 * 参数组装
	 * 
	 * @return
	 */
	public Map<String, String> getParams() {
		Map<String, String> params = new TreeMap<String, String>();
		params.put("appid", this.appid);
		params.put("secret", this.secret);
		params.put("code", this.code);
		params.put("grant_type", this.grant_type);
		return params;
	}

	public String getAppid() {
		return appid;
	}

	public void setAppid(String appid) {
		this.appid = appid;
	}

	public String getSecret() {
		return secret;
	}

	public void setSecret(String secret) {
		this.secret = secret;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getGrant_type() {
		return grant_type;
	}

	@Override
	public String toString() {
		return "AuthTokenParams [appid=" + appid + ", secret=" + secret
				+ ", code=" + code + ", grant_type=" + grant_type + "]";
	}
	
}
