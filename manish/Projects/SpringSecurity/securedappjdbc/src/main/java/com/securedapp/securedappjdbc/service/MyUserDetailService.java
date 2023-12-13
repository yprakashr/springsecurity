package com.securedapp.securedappjdbc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.securedapp.securedappjdbc.dao.UsersRepo;
import com.securedapp.securedappjdbc.entity.Users;
import com.securedapp.securedappjdbc.principal.UsersPrincipal;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    private UsersRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repo.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("username not found");
        }

        return new UsersPrincipal(user);
    }

}
