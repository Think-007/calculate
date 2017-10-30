package com.thinker.cal.dao;

import com.thinker.cal.domain.LocalUser;

public interface UserInfoMapper {

	/**
	 * 注册用户信息
	 * @param user
	 * @return
	 */
	public int registUser(LocalUser user);
	

}
