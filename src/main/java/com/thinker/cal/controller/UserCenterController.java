package com.thinker.cal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/usercenter")
public class UserCenterController {

	@RequestMapping("/userinfo")
	public ModelAndView userCenter() {

		return null;
	}

}
