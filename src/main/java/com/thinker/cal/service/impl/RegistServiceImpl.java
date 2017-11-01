package com.thinker.cal.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.service.RegistService;
import com.thinker.cal.service.UserInfoService;

@Service
public class RegistServiceImpl implements RegistService {
	
	@Resource
	private UserInfoService userInfoService;

	@Transactional
	@Override
	public void registAndGetPlace(LocalUser userInfo) {
		// TODO Auto-generated method stub

		userInfoService.saveUserInfo(userInfo);
		
	}

}
