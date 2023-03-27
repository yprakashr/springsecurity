package com.springboot.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springboot.entity.Roles;
//import com.eazybytes.model.Customer;
//import com.eazybytes.repository.CustomerRepository;
import com.springboot.entity.Users;
import com.springboot.repo.UserRepository;

@Service
public class LoadUserByUsername implements AuthenticationProvider{
//	public class LoadUserByUsername implements UserDetailsService{

//	@Autowired
//	UserRepository userRepository;
//
//	@Autowired
//    private PasswordEncoder passwordEncoder;
//
//
//
//    @Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		String userName,password=null;
//		List<GrantedAuthority> authorities=null;
//		List<Users> user=userRepository.findByusername(username);
//		System.out.println(username);
//		if(user.size()==0) {
//			throw new UsernameNotFoundException("User details not found for the user: "+username);
//		}else {
//			userName=user.get(0).getEmail();
//			password=user.get(0).getPassword();
//			authorities=new ArrayList<>();
//			authorities.add(new SimpleGrantedAuthority(user.get(0).getRole()));
//	}
//		return new User(username,password,authorities);
//	}

	 @Autowired
	    private UserRepository userRepository;

	    @Autowired
	    private PasswordEncoder passwordEncoder;

	    @Override
	    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
	        String username = authentication.getName();
	        String pwd = authentication.getCredentials().toString();
	        List<Users> user = userRepository.findByusername(username);
	        if (user.size() > 0) {
	            if (passwordEncoder.matches(pwd, user.get(0).getPassword())) {
	                return new UsernamePasswordAuthenticationToken(username, pwd, getGrantedAuthorities(user.get(0).getRole()));
	            } else {
	                throw new BadCredentialsException("Invalid password!");
	            }
	        }else {
	            throw new BadCredentialsException("No user registered with this details!");
	        }
	    }
	    
	    private List<GrantedAuthority> getGrantedAuthorities(Set<Roles> authorities) {
	        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
	        for (Roles authority : authorities) {
	            grantedAuthorities.add(new SimpleGrantedAuthority(authority.getName()));
	        }
	        System.out.println(grantedAuthorities);
	        return grantedAuthorities;
	    }

	    @Override
	    public boolean supports(Class<?> authentication) {
	        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	    }
	}
