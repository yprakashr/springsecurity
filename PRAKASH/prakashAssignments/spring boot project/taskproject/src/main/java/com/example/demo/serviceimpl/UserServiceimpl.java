package com.example.demo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.payload.Userdto;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.UserService;

@Service
public class UserServiceimpl implements UserService {

	@Autowired
	private UserRepo userRepo;
@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Userdto createUser(Userdto userdto) {
		userdto.setPassword(passwordEncoder.encode(userdto.getPassword()));
		Users users = UserDtoToEntity(userdto);
		Users user = userRepo.save(users);
		return entityToUserdto(user);
	}

	private Users UserDtoToEntity(Userdto userdto) {
		Users users = new Users();
		users.setName(userdto.getName());
		users.setEmail(userdto.getEmail());
		users.setPassword(userdto.getPassword());
		return users;
	}

	private Userdto entityToUserdto(Users users) {
		Userdto userdto = new Userdto();
		userdto.setName(users.getName());
		userdto.setEmail(users.getEmail());
		userdto.setPassword(users.getPassword());
		return userdto;
	}

	@Override
	public List<Users> getAllUsers() {
		return userRepo.findAll();
	}

}
