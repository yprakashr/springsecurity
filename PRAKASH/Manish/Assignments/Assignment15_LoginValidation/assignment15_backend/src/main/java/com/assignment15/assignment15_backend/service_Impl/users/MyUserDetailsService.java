package com.assignment15.assignment15_backend.service_Impl.users;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.assignment15.assignment15_backend.entity.Users;
import com.assignment15.assignment15_backend.repo.usersRepo;

public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private usersRepo usersRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Users> Users = usersRepo.findByUsername(username);
        return Users.map(MyUserDetails::new).orElseThrow(() -> new UsernameNotFoundException("user not found"));
    }

}
