package com.thinker.cal.domain;

import java.io.Serializable;
import java.util.Date;

public class Court implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// 场地id
	private int courtId;

	// 场地名称
	private String name;
	// 地址
	private String address;
	// 国家
	private String country;
	// 城市
	private String city;

	// 场地类型
	private int type;
	// 场地面积
	private double area;

	// 所属机构
	private String owner;

	private String telNumber;

	private String email;

	private Date createTime;

	public int getCourtId() {
		return courtId;
	}

	public void setCourtId(int courtId) {
		this.courtId = courtId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public double getArea() {
		return area;
	}

	public void setArea(double area) {
		this.area = area;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getTelNumber() {
		return telNumber;
	}

	public void setTelNumber(String telNumber) {
		this.telNumber = telNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Override
	public String toString() {
		return "Court [courtId=" + courtId + ", name=" + name + ", address=" + address + ", country=" + country
				+ ", city=" + city + ", type=" + type + ", area=" + area + ", owner=" + owner + ", telNumber="
				+ telNumber + ", email=" + email + ", createTime=" + createTime + "]";
	}

}
