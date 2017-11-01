/*      						
 * Copyright 2012 LPF  All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年10月26日	| LPF 	| 	create the file                       
 */

package com.thinker.cal.shiro;

import javax.annotation.Resource;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.stereotype.Service;

import com.thinker.cal.domain.LocalUser;
import com.thinker.cal.service.UserInfoService;

/**
 * 
 * shiro自定义鉴权
 * 
 * <p>
 * 类详细描述
 * </p>
 * 
 * @author LPF
 * 
 */
@Service
public class ShiroRealmImpl extends AuthorizingRealm {

	@Resource
	private UserInfoService userInfoService;

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(
			PrincipalCollection principals) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken token) throws AuthenticationException {

		UsernamePasswordToken authToken = (UsernamePasswordToken) token;

		String userId = authToken.getUsername();
		String password = String.copyValueOf(authToken.getPassword());

		LocalUser userInfo = userInfoService.getUserInfoByUid(userId);

		// 数据库用户id
		String sqlUsrId = userInfo.getUserid();

		if (!userId.equals(sqlUsrId)) {
			return null;
		}

		return new SimpleAuthenticationInfo(userId, password, getName());

	}

}
