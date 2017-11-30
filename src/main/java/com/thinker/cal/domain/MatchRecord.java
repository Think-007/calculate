/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年11月19日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * 比赛记录详情，按照uid分表.
 * 
 * <p>
 * 类详细描述
 * </p>
 * 
 * @author LPF
 * 
 */

public class MatchRecord implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// 记录id
	private String id;

	// 比赛名称
	private String matchName;

	// 用户id
	private String userId;

	// 比赛地点id
	private int courtId;

	// 比赛人员名称
	private String playerName;

	// 挥杆次数
	private int swingTimes;

	// 成绩
	private String score;

	// 比赛时间
	private Date createTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMatchName() {
		return matchName;
	}

	public void setMatchName(String matchName) {
		this.matchName = matchName;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getCourtId() {
		return courtId;
	}

	public void setCourtId(int courtId) {
		this.courtId = courtId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getSwingTimes() {
		return swingTimes;
	}

	public void setSwingTimes(int swingTimes) {
		this.swingTimes = swingTimes;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Override
	public String toString() {
		return "MatchRecord [id=" + id + ", matchName=" + matchName
				+ ", userId=" + userId + ", courtId=" + courtId
				+ ", playerName=" + playerName + ", swingTimes=" + swingTimes
				+ ", score=" + score + ", createTime=" + createTime + "]";
	}

}
