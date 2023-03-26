package com.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@SpringBootApplication
@EnableEncryptableProperties
public class UsersLoginSignupBackendProcessApplication  {
	
//	@Autowired
//	private UsersController senderService;

	
	
	public static void main(String[] args) {
		SpringApplication.run(UsersLoginSignupBackendProcessApplication.class, args);
	}
	
	
//	@EventListener(ApplicationReadyEvent.class)
//	public void sendMail() {
//		senderService.sendGmail("yprakashr@gmail.com", "this is subject", "this is body of request");
//	}
	
//	@Bean
//	public void sendMail() {
//		senderService.sendGmail("yprakashr@gmail.com", "this is subject", "this is body of request");
//	}
	
}
