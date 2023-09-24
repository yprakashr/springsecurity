package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.app.serivce.Javamailsender;

@SpringBootApplication
public class RPACommandCenterApplication {

	
	@Autowired
	private Javamailsender javamailsender;
	
	public static void main(String[] args) {
		SpringApplication.run(RPACommandCenterApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("http://localhost:4200");
			}
		};
	}
	
//	@EventListener(ApplicationReadyEvent.class)
//	public void triggerMail() {
//		
//		javamailsender.sendMail("", "", "");
//		
//	}
	
}
