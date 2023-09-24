package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Users;
import com.example.demo.payload.Userdto;

public interface UserService {

	public Userdto createUser(Userdto userdto);

	public List<Users> getAllUsers();
}
