package com.thinker.cal.service;

import com.thinker.cal.domain.LocalUser;

public interface UserInfoService {

	/**
	 * 根据uid查询用户信息
	 * 
	 * @param userId
	 * @return
	 */
	public LocalUser getUserInfoByUid(String userId);

	/**
	 * 存储用户信息
	 * 
	 * @param localUser
	 * @return
	 */
	public int saveUserInfo(LocalUser localUser);

	/**
	 * 更新用户信息
	 * 
	 * @param localUser
	 * @return
	 */
	public int updateUserInfo(LocalUser localUser);

}
