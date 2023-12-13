package com.example.spring_security_demo.controllers.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_security_demo.entities.users.users;
import com.example.spring_security_demo.repositories.users.UsersRepo;

@RestController
@RequestMapping("users")
public class UsersController {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("add")
    public String addUser(@RequestBody users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usersRepo.save(user);
        return "User added";
    }
}
