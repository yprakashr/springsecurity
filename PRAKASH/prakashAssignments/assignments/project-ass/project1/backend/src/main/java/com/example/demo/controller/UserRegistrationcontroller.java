package com.example.demo.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserRegistration;
import com.example.demo.serivce.MailService;
import com.example.demo.serivce.UserRegisterService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserRegistrationcontroller {
	@Autowired
	MailService mailService;
	
	Map<String, Object> map = new LinkedHashMap<String, Object>();
	@Autowired
	UserRegisterService userRegisterService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@PostMapping
	  public ResponseEntity<?> createProjects(@RequestBody UserRegistration userRegistration) { 
		System.out.println(userRegistration);
		mailService.sendMail("yprakashr@gmail.com", "solventek verification message", "");
			
		   userRegistration.setId((long)2);
		   userRegistration.setPassword(passwordEncoder.encode(userRegistration.getPassword()));
	      try {
	    	  userRegisterService.createUsers(userRegistration);		 
	        	 map.clear();
	             map.put("status", 200);
	             map.put("message", "User saved successfully");
	 	        return new ResponseEntity<>(map, HttpStatus.CREATED);
	        	}catch(Exception e) {
	           	 map.clear();
	             map.put("status", 500);
	             map.put("message", "Internal Server Error");
	             return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	        	}}
	
	
	@GetMapping
	public ResponseEntity<?> getExistingPatients(@RequestParam Map<String,String> patient){		
	String username= patient.get("email");
	String password= patient.get("password");
	Optional<UserRegistration> opUser=userRegisterService.findByusername(username);
	System.out.println(opUser);
	String passworddatabase= opUser.get().getPassword();
	System.out.println(passworddatabase);
		if(passwordEncoder.matches(password,passworddatabase)){
		map.clear();
		map.put("status", 200);
        map.put("message", "User found successfully");
        map.put("data", opUser);
		return new ResponseEntity<>(map,HttpStatus.OK);
	}else {
		map.clear();
		map.put("status", "401");
		map.put("message","user not found");
		return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
	}}
}
