/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月29日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.domain;

import java.util.Map;

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

public abstract class AbstractParams {

	/**
	 * 生成请求参数
	 * 
	 * @return
	 */
	public abstract Map<String, String> getParams() throws Exception;
}
