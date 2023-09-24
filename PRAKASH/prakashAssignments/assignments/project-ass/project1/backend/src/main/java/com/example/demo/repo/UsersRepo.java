package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.UserRegistration;

public interface UsersRepo  extends MongoRepository<UserRegistration, Long>{
	Optional<UserRegistration> findByemail(String email);

	Optional<UserRegistration> findByEmail(String email);
	}
