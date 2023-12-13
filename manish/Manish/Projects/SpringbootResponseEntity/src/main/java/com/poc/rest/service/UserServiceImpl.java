package com.poc.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poc.rest.dao.UserRepository;
import com.poc.rest.entity.Users;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public List<Users> getUser() {

        return userRepo.findAll();
    }

    @Override
    public void save(Users user) {

        userRepo.save(user);

    }

    @Override
    public Users findById(Integer id) {

        return userRepo.findById(id).get();
    }

    @Override
    public void delete(Users user) {

        userRepo.delete(user);

    }

    @Override
    public void deleteAll() {

        userRepo.deleteAll();

    }
}
