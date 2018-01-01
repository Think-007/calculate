/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2018年1月1日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.thinker.cal.domain.Court;
import com.thinker.cal.domain.UserRecord;
import com.thinker.cal.service.GolfPlaceService;
import com.thinker.cal.service.MatchRecordService;
import com.thinker.cal.util.CalConst;
import com.thinker.cal.util.CalLog;
import com.thinker.creator.domain.ProcessResult;

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
@Controller
@RequestMapping("/cal")
public class CalculatorController {
	
	private static final Logger logger = LoggerFactory
			.getLogger(AuthController.class);
	@Resource
	private GolfPlaceService golfPlaceService;
	
	@Resource
	private MatchRecordService matchRecordService;
	
	
//	/**
//	 * 查詢所有場地信息
//	 * @return
//	 */
//	@RequestMapping(value="/map",method=RequestMethod.GET)
//	@ResponseBody
//	public ProcessResult getAllFields(){
//		
//		
//		ProcessResult processResult = new ProcessResult();
//		try{
//			List<Court> places= golfPlaceService.getAllCourt();
//			
//			processResult.setRetCode(ProcessResult.SUCCESS);
//			processResult.setRetMsg("ok");
//			processResult.setRetObj(places);
//			
//		}catch (Throwable t) {
//
//			processResult.setRetCode(CalConst.EXCEPTION);
//			processResult.setRetMsg(CalConst.EXCEPTION_MSG);
//			processResult.setRetObj(t);
//			t.printStackTrace();
//			CalLog.error(logger, "toeknAuth error", null, null, t);
//			
//			
//		}
//		
//		return processResult;
//		
//		
//	}
	@RequestMapping(value="/save_record",method=RequestMethod.POST)
	@ResponseBody
	public ProcessResult saveUserRecord(UserRecord userRecord){
		ProcessResult processResult = new ProcessResult();
		try{
			int result = matchRecordService.saveUserRecord(userRecord);
			if(result>0){
				processResult.setRetCode(ProcessResult.SUCCESS);
				processResult.setRetMsg("ok");
			}
			
		}catch (Throwable t) {

			processResult.setRetCode(CalConst.EXCEPTION);
			processResult.setRetMsg(CalConst.EXCEPTION_MSG);
			processResult.setRetObj(t);
			t.printStackTrace();
			CalLog.error(logger, "toeknAuth error", null, null, t);
		}
		
		return processResult;
	}
	
	

}
