package com.thinker.cal.service;

import com.thinker.cal.domain.LocalUser;

public interface RegistService {

	/**
	 * 注册用户，同时查询场地信息
	 * 
	 * @param userInfo
	 */
	public void registAndGetPlace(LocalUser userInfo);

}
