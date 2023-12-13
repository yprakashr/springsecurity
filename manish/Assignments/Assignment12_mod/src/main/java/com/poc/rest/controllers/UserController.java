package com.poc.rest.controllers;

import java.sql.*;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.poc.rest.connection.ConnectionProvider;
import com.poc.rest.entity.Users;
import com.poc.rest.service.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> getUser() {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<Users> userList = userService.getUser();
        if (!userList.isEmpty()) {
            map.put("status", "200 OK");
            map.put("data", userList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", "404 not found");
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/users")
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        userService.save(user);
        map.put("status", "200 OK");
        map.put("message", "Record is Saved Successfully!");
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @GetMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = userService.findById(id);
            map.put("status", "200 OK");
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", "404 not found");
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = userService.findById(id);
            userService.delete(user);
            map.put("status", "200 OK");
            map.put("message", "Record is deleted successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", "404 not found");
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @PutMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> updateUserById(@PathVariable Integer id, @RequestBody Users userDetail) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = userService.findById(id);
            user.setUid(userDetail.getUid());
            user.setFullname(userDetail.getFullname());
            user.setPassword(user.getPassword());
            user.setPhonenumber(user.getPhonenumber());
            user.setUsername(userDetail.getUsername());
            userService.save(user);
            map.put("status", "200 OK");
            map.put("message", "Data updated succesfully");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", "404 not found");
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> deleteAll() {
        Map<String, Object> map = new LinkedHashMap<>();
        try {
            List<Users> userList = userService.getUser();
            if (!userList.isEmpty()) {
                userService.deleteAll();
                map.put("status", "200 OK");
                map.put("message", "Deleted all entries");
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", "404 not found");
                map.put("message", "No data to delete");
                return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", "404 not found");
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/Max_uID")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public int getMaxUserID() throws SQLException {
        int maxID = 0;
        Connection con = ConnectionProvider.getCon();
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select max(uid) from users");
        while (rs.next()) {
            maxID = rs.getInt(1);
        }
        return maxID;
    }

}
