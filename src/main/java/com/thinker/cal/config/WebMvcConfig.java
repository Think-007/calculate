//package com.thinker.cal.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//
//import com.thinker.cal.interceptor.LoginInterceptor;
//
//@Configuration
//public class WebMvcConfig extends WebMvcConfigurerAdapter {
//
//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//
//		// 多个拦截器组成一个拦截器链
//		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**");
//		super.addInterceptors(registry);
//	}
//}
