package com.securedapp.securedappjdbc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.securedapp.securedappjdbc.entity.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

    Users findByUsername(String username);
}
