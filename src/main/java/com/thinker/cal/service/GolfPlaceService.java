package com.thinker.cal.service;

import java.util.List;

import com.thinker.cal.domain.Court;

public interface GolfPlaceService {

	/**
	 * 查询所有场地
	 * 
	 * @return
	 */
	public List<Court> getAllCourt();

}
