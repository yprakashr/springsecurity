package com.example.spring_security_demo.repositories.users;

import com.example.spring_security_demo.entities.users.users;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<users, Integer> {

    public Optional<users> findByName(String username);
}
