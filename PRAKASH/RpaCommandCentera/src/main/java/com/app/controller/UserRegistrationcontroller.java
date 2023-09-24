package com.app.controller;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.app.serivce.Javamailsender;
import com.app.serivce.UserRegisterService;
import com.appmodel.UserRegistration;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserRegistrationcontroller {

	Map<String, Object> map = new LinkedHashMap<String, Object>();

	@Autowired
	UserRegisterService userRegisterService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	Javamailsender javamailsender;

	private static final int TOKEN_LENGTH = 32;

	@PostMapping
	public ResponseEntity<?> createProjects(@RequestBody UserRegistration userRegistration) {
		String email = userRegistration.getEmail();
		Optional<UserRegistration> opUser = userRegisterService.findByusername(email);
		if(opUser.isEmpty()) {
			SecureRandom random = new SecureRandom();
			byte[] tokenBytes = new byte[TOKEN_LENGTH];
			random.nextBytes(tokenBytes);
			String token = Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
			javamailsender.sendMail(userRegistration.getEmail(), "SolventekCode Verification Mail",
					"" + " Hi \n"+
			          " 	Please click on below link for verifying your email id \n  " + 
							" 	  http://localhost:4200/verify/" + token + " "
			          		+ " \n\n "+
			              " Thanks & Regards \n" +
			          	  " RPA Command Center "	);
			userRegistration.setStatus(false);
			userRegistration.setToken(token);
			userRegistration.setId((long) 2);
			userRegistration.setPassword(passwordEncoder.encode(userRegistration.getPassword()));
			try {
				userRegisterService.createUsers(userRegistration);
				map.clear();
				map.put("status", "200");
				map.put("message", "User saved successfully");
				return new ResponseEntity<>(map, HttpStatus.CREATED);
			} catch (Exception e) {
				map.clear();
				map.put("status", "500");
				map.put("message", "Internal Server Error");
				return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
			}
//			
		} else {
			if(opUser.get().isStatus()==false) {
//				userRegisterService.updateUserByEmail(email);
				map.clear();
				map.put("status", 406);
				map.put("message", "Verification link is already sent to your mail");
				return new ResponseEntity<>(map, HttpStatus.NOT_ACCEPTABLE);
			}
		else {
			map.clear();
			map.put("status", 409);
			map.put("message", "User already registered");
			return new ResponseEntity<>(map, HttpStatus.CONFLICT);
		}}}
	

	@GetMapping
	public ResponseEntity<?> getExistingPatients(@RequestParam Map<String, String> user) {
		String email = user.get("email");
		String password = user.get("password");
		Optional<UserRegistration> opUser = userRegisterService.findByusername(email);
		System.out.println(opUser);
		String passworddatabase = opUser.get().getPassword();

		System.out.println(passworddatabase);
		if (opUser.isPresent()||opUser.get().isStatus()) {
			if (passwordEncoder.matches(password, passworddatabase)) {
				map.clear();
				map.put("status", "200");
				map.put("message", "User found successfully");
				map.put("data", opUser);
				return new ResponseEntity<>(map, HttpStatus.OK);
			} else {
				map.clear();
				map.put("status", "400");
				map.put("message", "invalid password");
				return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
			}
		} else {
			map.clear();
			map.put("status", "401");
			map.put("message", "user not found");
			return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
		}}
		

	@PutMapping("/verify/{token}")
    public ResponseEntity<?> updateUser(@PathVariable String token) {
        boolean updated = userRegisterService.updateUser(token);
        if (updated) {
        	map.clear();
			map.put("status", 200);
			map.put("message", "user upadated successfully");
			return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
        	System.out.println(ResponseEntity.notFound().build());
            return ResponseEntity.notFound().build();
        }}
	

	@GetMapping("/set/{email}")
	public ResponseEntity<?> getPassword(@PathVariable String email) {
		String characters = "0123456789";
		Random random = new Random();
		StringBuilder code = new StringBuilder();
		for (int i = 0; i < 4; i++) {
			int index = random.nextInt(characters.length());
			code.append(characters.charAt(index));
		}
			Optional<UserRegistration> opUser = userRegisterService.findByusername(email);
			System.out.println("this is about user present or not: "+opUser.isPresent());
			if (opUser.isPresent()) {
				javamailsender.sendMail(opUser.get().getEmail(), "OTP sent from solventek: "+ code + ".",
						"this is the otp to recover your password " + code + ".");
				map.clear();
				map.put("code", code);
				map.put("status", 200);
				map.put("message", "User found successfully");
				return new ResponseEntity<>(map, HttpStatus.OK);
			} else {
				map.clear();
				map.put("status", "400");
				map.put("message", "invalid email");
				return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
			}}
	
	

	@PatchMapping("/updatePassword")
    public ResponseEntity<?> updatePassword(@RequestBody UserRegistration userRegistration) {
        		String email=userRegistration.getEmail();
        		String password=userRegistration.getPassword();
        		System.out.println("this is email "+email);
				System.out.println("this is password "+password);
			boolean opUser = userRegisterService.updatePassword(email,password);
        if (opUser==true) {
        	System.out.println("updated successfully controller");
        	map.clear();
			map.put("status", 200);
			map.put("message", "user upadated successfully");
			return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
        	map.clear();
			map.put("status", 400);
			map.put("message", "user upadated successfully");
			return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }}
	
	
	
}




