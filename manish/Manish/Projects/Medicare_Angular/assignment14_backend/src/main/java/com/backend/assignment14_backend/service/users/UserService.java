package com.backend.assignment14_backend.service.users;

import java.util.List;
import com.backend.assignment14_backend.entities.Users;

public interface UserService {

    public List<Users> getUsers();

    public void saveUser(Users user);

    public Users getUserById(Integer id);

    public void updateUser(Users user);
}
