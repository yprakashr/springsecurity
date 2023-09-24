package com.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.appmodel.UserRegistration;

public interface UsersRepo  extends MongoRepository<UserRegistration, Long>{
	Optional<UserRegistration> findByemail(String email);
	Optional<UserRegistration> findBytoken(String token);
	
	}
