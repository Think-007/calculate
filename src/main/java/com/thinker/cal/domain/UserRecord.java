/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2018年1月1日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * 用戶的比賽記錄模型
 * 
 * <p>
 * 类详细描述
 * </p> 
* 
 * @author LPF
 * 
 */

public class UserRecord implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//記錄id
	private String recordId;
	//用戶id
	private String userId;
	//參賽人員的比賽成績表
	private String recordInfo;
	
	//创建时间
	private Date createTime;
	
	public String getRecordId() {
		return recordId;
	}
	public void setRecordId(String recordId) {
		this.recordId = recordId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRecordInfo() {
		return recordInfo;
	}
	public void setRecordInfo(String recordInfo) {
		this.recordInfo = recordInfo;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	@Override
	public String toString() {
		return "UserRecord [recordId=" + recordId + ", userId=" + userId + ", recordInfo=" + recordInfo
				+ ", createTime=" + createTime + "]";
	}
	

}
