package com.thinker.cal.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.thinker.cal.dao.CourtMapper;
import com.thinker.cal.domain.Court;
import com.thinker.cal.service.GolfPlaceService;

@Service
public class GolfPlaceServiceImpl implements GolfPlaceService {

	@Resource
	private CourtMapper courtMapper;

	@Override
	public List<Court> getAllCourt() {

		List<Court> result = courtMapper.queryAllCourt();

		return result;
	}

}
