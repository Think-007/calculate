package com.thinker.cal.domain;

import java.io.Serializable;

public class LocalUser implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// 用户id
	private String userid;

	// 用户名
	private String userName;

	// 密码
	private String password;

	// 盐值
	private String salt;

	// 真实姓名
	private String realName;

	// 性别 1男 2女 0 未知
	private int sex;

	// 生日
	private String birthday;

	// 身高
	private double height;

	// 体重
	private double weight;

	// 电话号码
	private String telNumber;

	// 国家
	private String country;

	// 省份
	private String provience;

	// 头像
	private String headURL;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public String getTelNumber() {
		return telNumber;
	}

	public void setTelNumber(String telNumber) {
		this.telNumber = telNumber;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getHeadURL() {
		return headURL;
	}

	public void setHeadURL(String headURL) {
		this.headURL = headURL;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getProvience() {
		return provience;
	}

	public void setProvience(String provience) {
		this.provience = provience;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LocalUser [userid=" + userid + ", userName=" + userName
				+ ", password=" + password + ", salt=" + salt + ", realName="
				+ realName + ", sex=" + sex + ", birthday=" + birthday
				+ ", height=" + height + ", weight=" + weight + ", telNumber="
				+ telNumber + ", country=" + country + ", provience="
				+ provience + ", headURL=" + headURL + "]";
	}


}
