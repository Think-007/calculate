//package com.thinker.cal.filter;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import com.thinker.cal.controller.AuthController;
//import com.thinker.cal.util.CalLog;
//
//@WebFilter(filterName = "gateFilter", urlPatterns = "/*")
//public class GateFilter implements Filter {
//
//	private static final Logger logger = LoggerFactory
//			.getLogger(AuthController.class);
//
//	@Override
//	public void destroy() {
//
//		CalLog.info(logger, " destroy ", null, "gatefilter destroy");
//
//	}
//
//	@Override
//	public void doFilter(ServletRequest arg0, ServletResponse arg1,
//			FilterChain arg2) throws IOException, ServletException {
//
//	}
//
//	@Override
//	public void init(FilterConfig arg0) throws ServletException {
//
//		CalLog.info(logger, " init ", null, "gatefilter init");
//
//	}
//}
