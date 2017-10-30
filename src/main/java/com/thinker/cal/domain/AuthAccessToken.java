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

/**
 * 
 * 获取鉴权token
 * 
 * <p>
 * 类详细描述
 * </p>
 * 
 * @author LPF
 * 
 */

public class AuthAccessToken implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// 范围授权token
	private String access_token;
	// 过时时间
	private int expires_in;
	// 刷新token
	private String refresh_token;
	// 用户的openid
	private String openid;
	// 范围
	private String scope;
	// 当且仅当该网站应用已获得该用户的userinfo授权时，才会出现该字段
	private String unionid;

	public String getAccess_token() {
		return access_token;
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	public int getExpires_in() {
		return expires_in;
	}

	public void setExpires_in(int expires_in) {
		this.expires_in = expires_in;
	}

	public String getRefresh_token() {
		return refresh_token;
	}

	public void setRefresh_token(String refresh_token) {
		this.refresh_token = refresh_token;
	}

	public String getOpenid() {
		return openid;
	}

	public void setOpenid(String openid) {
		this.openid = openid;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

	public String getUnionid() {
		return unionid;
	}

	public void setUnionid(String unionid) {
		this.unionid = unionid;
	}

	@Override
	public String toString() {
		return "AuthAccessToken [access_token=" + access_token
				+ ", expires_in=" + expires_in + ", refresh_token="
				+ refresh_token + ", openid=" + openid + ", scope=" + scope
				+ ", unionid=" + unionid + "]";
	}
}
