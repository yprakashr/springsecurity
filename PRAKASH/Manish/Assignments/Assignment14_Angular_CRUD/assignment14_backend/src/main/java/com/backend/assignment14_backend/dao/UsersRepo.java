package com.backend.assignment14_backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.assignment14_backend.entities.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

    @Query(value = "select * from users u where u.username=?1 and u.password=?2", nativeQuery = true)
    public List<Users> userLogin(String username, String password);

    Users findByUsername(String username);

    Users findByEmail(String email);
}
