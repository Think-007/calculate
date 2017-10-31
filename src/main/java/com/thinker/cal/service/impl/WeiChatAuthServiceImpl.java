package com.thinker.cal.service.impl;

import java.util.Map;


import org.springframework.stereotype.Service;

import com.thinker.cal.config.WeiChatConfig;
import com.thinker.cal.domain.AbstractParams;
import com.thinker.cal.domain.AuthAccessToken;
import com.thinker.cal.domain.AuthUserInfo;
import com.thinker.cal.service.WeiChatAuthService;
import com.thinker.cal.util.HttpUtil;
import com.thinker.cal.util.JsonUtils;

@Service
public class WeiChatAuthServiceImpl implements WeiChatAuthService {

	@Override
	public String getAuthPath(AbstractParams basic, String path)
			throws Exception {
		Map<String, String> params = basic.getParams();
		String url = path + "?appid=" + params.get("appid") + "&redirect_uri="
				+ params.get("redirect_uri") + "&response_type="
				+ params.get("response_type") + "&scope=" + params.get("scope")
				+ "&state=" + params.get("state") + "#wechat_redirect";

		return url;
	}

	@Override
	public AuthAccessToken getAuthAccessToken(AbstractParams basic, String path)
			throws Exception {

		Map<String, String> params = basic.getParams();

		String reqURL = path + "?appid=" + params.get("appid") + "&secret="
				+ params.get("secret") + "&code=" + params.get("code")
				+ "&grant_type=" + params.get("grant_type");

		String tokenJsonStr = HttpUtil.httpsReqData(reqURL, "GET", null, null);
		System.out.println(tokenJsonStr);
		AuthAccessToken authAccessToken = JsonUtils.fromJson(tokenJsonStr,
				AuthAccessToken.class);

		return authAccessToken;
	}

	@Override
	public AuthAccessToken refreshAuthAccessToken(AbstractParams basic,
			String path) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AuthUserInfo getAuthUserInfo(String accessToken, String openId)
			throws Exception {
		String reqURL = WeiChatConfig.SNS_USERINFO_URL + "?access_token="
				+ accessToken + "&openid=" + openId;

		String userInfoJsonStr = HttpUtil.httpsReqData(reqURL, "GET", null,
				null);
		System.out.println(userInfoJsonStr);

		AuthUserInfo authUserInfo = JsonUtils.fromJson(userInfoJsonStr,
				AuthUserInfo.class);
		System.out.println(authUserInfo);

		return authUserInfo;
	}

}
