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

import com.thinker.cal.domain.Court;

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

public interface CourtMapper {

	/**
	 * 创建场地
	 * 
	 * @param court
	 * @return
	 */
	public int insertCourt(Court court);

	/**
	 * 查询所有场地
	 * 
	 * @return
	 */
	public List<Court> queryAllCourt();

}
