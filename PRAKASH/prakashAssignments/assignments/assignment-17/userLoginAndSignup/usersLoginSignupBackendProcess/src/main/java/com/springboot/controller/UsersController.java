package com.springboot.controller;

import java.util.LinkedHashMap;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.entity.Users;
import com.springboot.repo.UserRepository;
import com.springboot.services.EmailService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UsersController {
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	UserRepository userRepository;
	
	Map< String, Object> map=new LinkedHashMap<String,Object>();
	List<Users> users;
	
	@Autowired
	Optional<Users>	user;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
    @Autowired
    private EmailService email_service;
	
    
	@PostMapping
	public ResponseEntity<?> usersRegistration(@RequestBody Users user){
		System.out.println(user);
		String encryptedpassword= passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedpassword);
		return new	ResponseEntity<Users>(userRepository.save(user),HttpStatus.CREATED);	
	}


	
	@GetMapping
	public ResponseEntity<?> getExistingPatients(@RequestParam Map<String,String> patient){		
	String username= patient.get("username");
	String password= patient.get("password");
	
	List<Users> opUser=userRepository.findByusername(username);
	
	String passworddatabase= opUser.get(0).getPassword();
		if(passwordEncoder.matches(password,passworddatabase)) {
		map.clear();
		map.put("status", "200");
		map.put("data",opUser );
		return new ResponseEntity<>(map,HttpStatus.OK);
	}else {
		map.clear();
		map.put("status", "404");
		map.put("message","data not found");
		return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
	}}

	

	@GetMapping("/getmap")
	public ResponseEntity<?> getByEmail(@RequestParam Map<String,String> Email){
		//generating random otp
		String email= Email.get("email");
		System.out.println(email);
		user=userRepository.findByemail(email);
		Users user1=user.get();
		String res=user1.getEmail();
		System.out.println(res);
	       if(email.equals(res)){
	    		Random random = new Random();
	  	        int otp = 1000 + random.nextInt(8999);
	  	        System.out.println(otp);
	  	        String subject="this is the verification purposes";
	  			String body="this is the otp to reset your password on my hub notifications"+otp;

	  			//sending mail
	    	   email_service.sendEmail(email,subject,body);
	    	   System.out.println("email sent successfully");
				map.clear();
				map.put("status",200);
				map.put("data","success");
				return new ResponseEntity<>(map,HttpStatus.OK);
			}else {
				map.clear();
				map.put("status",400);
				map.put("data","Entered wrong email address");
				return new ResponseEntity<>(  map,HttpStatus.BAD_REQUEST);
			}
		 }
	
	
	
	@SuppressWarnings("unchecked")
	@GetMapping("/get")
	//@Secured({"admin"})
	public ResponseEntity<?> getAll(){
		users=userRepository.findAll();
		try {
			if(!users.isEmpty()) {
				map.clear();
				map.put("status",200);
				map.put("data",users);
				return new ResponseEntity<>(  map,HttpStatus.OK);
			}else {
				map.clear();
				map.put("status",404);
				map.put("message","data is not found");
				return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
			}
		}catch(Exception e){
			map.clear();
			map.put("status",404);
			map.put("message","data is not found");
			return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
		}
	}
	

	
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getById(@PathVariable long id){
	user=userRepository.findById(id);
	System.out.println(users);
			try {
			if(!users.isEmpty()) {
				map.clear();
				map.put("stauts",200);
				map.put("data",users);
				return new ResponseEntity<>(  map,HttpStatus.OK);
			}else {
				map.clear();
				map.put("stauts",404);
				map.put("message","data is not found");
				return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
			}
		}catch(Exception e){
			map.clear();
			map.put("stauts",404);
			map.put("message","data is not found");
			return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Users> deleteUser(@PathVariable long id) {
		 user=userRepository.findById(id);
		 System.out.println(id);
		if(user.isPresent()) {
			userRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}}
	
	
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Users> updateById(@PathVariable long id,@RequestBody Users user1){
		user=userRepository.findById(id);
	System.out.println(id);
	BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
	String encryptedpassword= bcrypt.encode(user1.getPassword());
	user.get().setPassword(encryptedpassword);
	if(user.isPresent()) {
		user.get().setFullname(user1.getFullname());
		user.get().setUsername(user1.getUsername());
		user.get().setPhone(user1.getPhone());
		user.get().setGender(user1.getGender());
		return new ResponseEntity<>(userRepository.save(user.get()),HttpStatus.OK);
	}else {
		return new ResponseEntity<Users>(HttpStatus.NOT_FOUND);
	}}
	
	
}

	

	
	
	
	
	
	

