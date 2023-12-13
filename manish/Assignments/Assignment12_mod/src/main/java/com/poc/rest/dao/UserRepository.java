package com.poc.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.rest.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

}