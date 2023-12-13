package com.example.demo.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.exception.UserNotFound;
import com.example.demo.repo.UserRepo;
@Service
public class CustomUserDetailsService implements UserDetailsService{
	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		Users users=userRepo.findByemail(email).orElseThrow(()->new UserNotFound(String.format("user with email %s is not found",email)));
		Set<String> roles=new HashSet<String>();
		roles.add("ROLE_ADMIN");
		return new User(users.getEmail(),users.getPassword(),userAuthorities(roles));
	}

	private Collection<? extends GrantedAuthority> userAuthorities(Set<String> roles){
		return roles.stream().map(role->new SimpleGrantedAuthority(role)).collect(Collectors.toList());
	}
	
}
