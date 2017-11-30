package com.thinker.cal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.thinker.creator.domain.ProcessResult;

@Controller
@RequestMapping("/usercenter")
public class UserCenterController {

	@RequestMapping("/userinfo")
	public ProcessResult userCenter() {
		
		ProcessResult processResult = new ProcessResult();
		
		

		return null;
	}

}
