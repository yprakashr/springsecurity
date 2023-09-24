package com.example.demo.serivce;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.UserRegistration;
import com.example.demo.repo.UsersRepo;

@Service
public class UserRegisterService {
	
	
		@Autowired
		UsersRepo usersRepo;

		@Autowired
		private SequenceGenereatorService sequenceGeneratorService;
	
		public UserRegistration createUsers(UserRegistration userRegistration) {
		userRegistration.setId(sequenceGeneratorService.generateSequence(userRegistration.getId()));
		return usersRepo.save(userRegistration);
	}

		public Optional<UserRegistration> findByusername(String email) {
			return usersRepo.findByemail(email);
		}

}
