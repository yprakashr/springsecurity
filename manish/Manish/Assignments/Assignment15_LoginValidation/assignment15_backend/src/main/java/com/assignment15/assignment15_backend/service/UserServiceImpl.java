package com.assignment15.assignment15_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment15.assignment15_backend.entity.Users;
import com.assignment15.assignment15_backend.repo.usersRepo;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private usersRepo repo;

    @Override
    public List<Users> getUsers() {
        return repo.findAll();
    }

    @Override
    public Users getUserByID(int id) {
        return repo.findById(id).get();
    }

    @Override
    public void deleteUser(Users user) {
        repo.delete(user);
    }

    @Override
    public void updateUser(Users user) {
        repo.save(user);
    }

    @Override
    public void saveUser(Users user) {
        repo.save(user);
    }

}
