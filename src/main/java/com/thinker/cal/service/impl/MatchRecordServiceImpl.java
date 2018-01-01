/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2018年1月1日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.service.impl;

import java.util.Calendar;

import javax.annotation.Resource;
import javax.websocket.server.ServerEndpoint;

import org.springframework.stereotype.Service;

import com.think.creator.facade.IdCreatorFacade;
import com.thinker.cal.dao.MatchRecordMapper;
import com.thinker.cal.domain.UserRecord;
import com.thinker.cal.service.MatchRecordService;

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
@Service
public class MatchRecordServiceImpl implements MatchRecordService{

	@Resource
	private MatchRecordMapper matchRecordMapper;
	
	@Resource
	private IdCreatorFacade idCreatorFacade;
	@Override
	public int saveUserRecord(UserRecord userRecord) {
		
		//1.生成记录id
		String recordId = idCreatorFacade.generateOrderlyID();//Math.random()*100000+"";
		userRecord.setRecordId(recordId);
		userRecord.setCreateTime(Calendar.getInstance().getTime());

		//2.存储记录
		int result = matchRecordMapper.insertUserRecord(userRecord);
		
		return result;
	}

}
