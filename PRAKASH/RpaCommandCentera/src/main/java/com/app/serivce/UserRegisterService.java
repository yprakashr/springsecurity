package com.app.serivce;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repo.UsersRepo;
import com.appmodel.UserRegistration;

@Service
public class UserRegisterService {
	
	
		@Autowired
		UsersRepo usersRepo;
		
		@Autowired
		PasswordEncoder passwordEncoder;

		@Autowired
		private SequenceGenereatorService sequenceGeneratorService;
	
		public UserRegistration createUsers(UserRegistration userRegistration) {
	
		userRegistration.setId(sequenceGeneratorService.generateSequence(userRegistration.getId()));
		return usersRepo.save(userRegistration);}
		
		
		public UserRegistration updateUser(UserRegistration userRegistration) {
			userRegistration.setId(sequenceGeneratorService.generateSequence(userRegistration.getId()));
			return usersRepo.save(userRegistration);
		}
		
		
		
		public Optional<UserRegistration> findByusername(String email) {
			return usersRepo.findByemail(email);
		}

		public boolean updateUser(String token) {
	        UserRegistration user = usersRepo.findBytoken(token).orElse(null);
	        System.out.println(user);
	        if (user == null) {
	            return false;
	        }
	        user.setStatus(true);
	        usersRepo.save(user);
	        return true;
	    }
		public boolean updateUserByEmail(String email) {
	        UserRegistration user = usersRepo.findBytoken(email).orElse(null);
	        System.out.println(user);
	        if (user == null) {
	            return false;
	        }
	        user.setStatus(true);
	        usersRepo.save(user);
	        return true;
	    }
		
		public Optional<UserRegistration> findBytoken(String token) {
			return usersRepo.findBytoken(token);
		}

		public boolean updatePassword(String email,String Password) {
	        UserRegistration user = usersRepo.findByemail(email).orElse(null);
	        System.out.println(email+"....."+Password);
	        if (user == null) {
	            return false;
	        }else {
	        	System.out.println("updated successfully services");
	        	 user.setPassword(passwordEncoder.encode(Password));
	 	        usersRepo.save(user);
	 	        return true;
	        }}

}