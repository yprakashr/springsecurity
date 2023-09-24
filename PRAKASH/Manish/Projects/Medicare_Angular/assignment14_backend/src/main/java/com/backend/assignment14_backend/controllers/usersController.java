package com.backend.assignment14_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.assignment14_backend.service.mailing.EmailSenderService;
import com.backend.assignment14_backend.dao.UsersRepo;
import com.backend.assignment14_backend.entities.Users;
import com.backend.assignment14_backend.service.users.UserService;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("backend")
@CrossOrigin(origins = "http://localhost:4200")
public class usersController {

    @Autowired
    private UserService uService;

    @Autowired
    private UsersRepo repo;

    // get all users
    @GetMapping("users")
    public ResponseEntity<?> getUsers() {
        List<Users> users;
        users = uService.getUsers();
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            if (!users.isEmpty()) {
                map.put("status", 200);
                map.put("data", users);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // post user
    @PostMapping("/users")
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            uService.saveUser(user);
            map.put("status", 201);
            map.put("message", "Record is Saved Successfully!");
            return new ResponseEntity<>(map, HttpStatus.CREATED);
        } catch (Exception e) {
            map.clear();
            map.put("status", 500);
            map.put("message", "Internal server error");
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = uService.getUserById(id);
            map.put("status", 200);
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }

    }

    // user login validation
    @GetMapping("/users/{uname}/{pass}")
    public ResponseEntity<?> userLogin(@PathVariable Map<String, String> pathVarsMap) {
        String username = pathVarsMap.get("uname");
        String password = pathVarsMap.get("pass");
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        map = new LinkedHashMap<String, Object>();
        List<Users> users;
        try {
            users = repo.userLogin(username, password);
            if (!users.isEmpty()) {
                map.put("status", 200);
                map.put("data", users);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // update user
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable("id") int ID, @RequestBody Users userData) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = uService.getUserById(ID);
            user.setId(userData.getId());
            user.setFullname(userData.getFullname());
            user.setEmail(userData.getEmail());
            user.setPassword(userData.getPassword());
            uService.updateUser(user);
            map.put("status", 200);
            map.put("message", "Record is updated Successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    // user by username
    @GetMapping("user/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable("username") String username) {
        Users user = repo.findByUsername(username);
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            if (user != null) {
                map.put("status", 200);
                map.put("data", user);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    // user by email
    @GetMapping("userByMail/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable("email") String email) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        Users user = repo.findByEmail(email);
        try {
            if (user != null) {
                map.put("status", 200);
                map.put("data", user);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @Autowired
    private EmailSenderService service;

    // send email
    @GetMapping("mail/{to}/{subject}/{body}")
    public ResponseEntity<?> sendMail(@PathVariable Map<String, String> pathVarsMap) {
        String to = pathVarsMap.get("to");
        String subject = pathVarsMap.get("subject");
        String body = pathVarsMap.get("body");
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            service.sendEmail(to, subject, body);
            map.put("status", 200);
            map.put("message", "Mail sent");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Mail failed");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}