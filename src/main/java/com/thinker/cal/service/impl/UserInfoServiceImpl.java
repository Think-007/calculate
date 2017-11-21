package com.thinker.cal.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.thinker.cal.dao.UserInfoMapper;
import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.exception.TelNumberRepeatException;
import com.thinker.cal.service.UserInfoService;

@Service
public class UserInfoServiceImpl implements UserInfoService {

	@Resource
	private UserInfoMapper userInfoMapper;

	@Override
	public LocalUser getUserInfoByUid(String userId) {

		LocalUser localUser = userInfoMapper.queryUserByUid(userId);
		return localUser;
	}

	@Override
	public int saveUserInfo(LocalUser localUser) {

		int result = 0;
		try {
			result = userInfoMapper.registUser(localUser);

		} catch (Exception e) {
			e.printStackTrace();
			throw new TelNumberRepeatException("电话号码已经被注册");
		}

		return result;
	}

	@Override
	public int updateUserInfo(LocalUser localUser) {
		return 0;
	}

}
