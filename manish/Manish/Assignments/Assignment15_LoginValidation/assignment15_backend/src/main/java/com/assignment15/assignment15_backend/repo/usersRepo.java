package com.assignment15.assignment15_backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

import com.assignment15.assignment15_backend.entity.Users;

public interface usersRepo extends JpaRepository<Users, Integer> {
    @Query(value = "select * from users u where u.username= BINARY ?1 and u.password= BINARY ?2", nativeQuery = true)
    public List<Users> userLogin(String username, String password);

    @Query(value = "select * from users u where u.username= BINARY ?1", nativeQuery = true)
    public List<Users> userbyUsername(String username);

    @Query(value = "select * from users u where u.email= BINARY ?1", nativeQuery = true)
    public List<Users> userbyEmail(String email);

    public Optional<Users> findByUsername(String username);

    @Query(value = "select * from users u where u.username= BINARY ?1", nativeQuery = true)
    public Users getUserByUsername(String username);

    @Query(value = "select * from users u where u.phonenumber= BINARY ?1", nativeQuery = true)
    public List<Users> userByPhone(long phonenumber);
}
