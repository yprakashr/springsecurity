package com.assignment15.assignment15_backend.service;

import java.util.List;

import com.assignment15.assignment15_backend.entity.Users;

public interface UserService {

    public List<Users> getUsers();

    public void saveUser(Users user);

    public Users getUserByID(int id);

    public void deleteUser(Users user);

    public void updateUser(Users user);
}
