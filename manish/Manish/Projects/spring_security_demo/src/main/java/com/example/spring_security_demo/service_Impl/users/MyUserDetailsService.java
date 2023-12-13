package com.example.spring_security_demo.service_Impl.users;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.spring_security_demo.entities.users.users;
import com.example.spring_security_demo.repositories.users.UsersRepo;

public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepo usersRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<users> Users = usersRepo.findByName(username);
        return Users.map(MyUserDetails::new).orElseThrow(() -> new UsernameNotFoundException("user not found"));
    }

}
