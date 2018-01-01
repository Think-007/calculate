/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年11月19日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.dao;

import java.util.List;

import com.thinker.cal.domain.MatchRecord;
import com.thinker.cal.domain.UserRecord;

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

public interface MatchRecordMapper {

	/**
	 * 存储比赛记录
	 * 
	 * @param matchRecord
	 * @return
	 */
	public int insertMatchRecord(List<MatchRecord> list);

	/**
	 * 分页查询比赛记录总体信息
	 * 
	 * @param userId
	 * @return
	 */
	public List<MatchRecord> queryMatchRecordByUserId(String userId);

	/**
	 * 查询指定id的记录详情
	 * 
	 * @param recordId
	 * @return
	 */
	public MatchRecord queryMatchRecordByRecordId(String recordId);
	
	
	/**
	 * 存儲最後的比賽記錄
	 * @param userRecord
	 * @return
	 */
	public int insertUserRecord(UserRecord userRecord);
}
