package com.thinker.cal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.thinker.cal.domain.LocalUser;

//@Mapper
public interface UserInfoMapper {

	/**
	 * 注册用户信息
	 * 
	 * @param user
	 * @return
	 */
	public int registUser(LocalUser user);

	/**
	 * 根据uid查询用户信息
	 * 
	 * @param userId
	 * @return
	 */
	public LocalUser queryUserByUid(String userId);

}
