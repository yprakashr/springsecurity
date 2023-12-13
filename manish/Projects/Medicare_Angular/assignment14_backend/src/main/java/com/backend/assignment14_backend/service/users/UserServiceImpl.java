package com.backend.assignment14_backend.service.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.assignment14_backend.dao.UsersRepo;
import com.backend.assignment14_backend.entities.Users;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UsersRepo repo;

    @Override
    public List<Users> getUsers() {
        return repo.findAll();
    }

    @Override
    public void saveUser(Users user) {
        repo.save(user);
    }

    @Override
    public Users getUserById(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public void updateUser(Users user) {
        repo.save(user);
    }

}
