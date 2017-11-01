package com.thinker.cal;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

import com.thinker.cal.dao.MysqlMapper;

@SpringBootApplication
// @ImportResource({ "classpath:hessian/hessian-client.xml" })
@MapperScan(basePackageClasses = { MysqlMapper.class })
@ImportResource({ "classpath:config/shiro/shiro-config.xml" })
public class CalculateApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalculateApplication.class, args);
	}
}
