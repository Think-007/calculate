package com.thinker.cal.domain;

import java.io.Serializable;

/**
 * 注册参数模型
 * 
 * @author lipengfeia
 *
 */
public class UserRegistParam implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// 电话号码
	private String telNum;

	// 密码
	private String password;

	// 验证码
	private String securityCode;

	public String getTelNum() {
		return telNum;
	}

	public void setTelNum(String telNum) {
		this.telNum = telNum;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}

	@Override
	public String toString() {
		return "UserRegistParam [telNum=" + telNum + ", password=" + password
				+ ", securityCode=" + securityCode + "]";
	}

}
