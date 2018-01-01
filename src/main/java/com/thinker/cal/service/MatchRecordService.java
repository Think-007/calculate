/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2018年1月1日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.service;

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

public interface MatchRecordService {
	
	/**
	 * 存储用户一般比赛记录
	 * @param userRecord
	 * @return
	 */
	public int saveUserRecord(UserRecord userRecord);

}
