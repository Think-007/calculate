/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年11月19日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.test.mapper;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.thinker.cal.dao.CourtMapper;
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

@RunWith(SpringRunner.class)
@SpringBootTest
public class CourtMapperTest {

	@Resource
	private CourtMapper courtMapper;

	@Test
	public void test() {

		List<Court> s = courtMapper.queryAllCourt();

		System.out.println(s);

	}
	
	@Test
	public void testInsert(){
		
		Court c = new Court();
		
		for(int i= 0;i<300000;i++){
			
			c.setCourtId(i);
			c.setName("尺寸");
			
			courtMapper.insertCourt(c);
			
			
		}
		
	}

}
