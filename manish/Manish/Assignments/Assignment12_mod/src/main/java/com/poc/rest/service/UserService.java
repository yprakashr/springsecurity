package com.poc.rest.service;

import java.util.List;

import com.poc.rest.entity.Users;

public interface UserService {

	public List<Users> getUser();

	public void save(Users users);

	public Users findById(Integer id);

	public void delete(Users users);

	public void deleteAll();

}
