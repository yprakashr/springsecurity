package com.assignment15.assignment15_backend.controllers;

import java.text.DecimalFormat;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.annotation.Secured;
import com.assignment15.assignment15_backend.entity.Users;
import com.assignment15.assignment15_backend.repo.usersRepo;
import com.assignment15.assignment15_backend.service.EmailService;
import com.assignment15.assignment15_backend.service.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private usersRepo repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // get all users
    @GetMapping("")
    public ResponseEntity<?> getUsers() {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            List<Users> users = service.getUsers();
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

    // get user by ID
    @GetMapping("{id}")
    public ResponseEntity<?> getUserByID(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = service.getUserByID(id);
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

    // post users
    @PostMapping("save")
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole("ROLE_USER");
            service.saveUser(user);
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

    // delete user by ID
    @DeleteMapping("delete/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> deleteUser(@PathVariable("id") int ID) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = service.getUserByID(ID);
            service.deleteUser(user);
            map.put("status", 200);
            map.put("message", "Record is deleted Successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    // update user
    @PutMapping("update/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<?> updateuser(@PathVariable("id") int ID, @RequestBody Users userData) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = service.getUserByID(ID);
            user.setId(userData.getId());
            user.setFullname(userData.getFullname());
            user.setPhonenumber(userData.getPhonenumber());
            user.setEmail(userData.getEmail());
            user.setUsername(userData.getUsername());
            user.setGender(userData.getGender());
            user.setRole(userData.getRole());
            service.updateUser(user);
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

    // Account recover
    @PutMapping("recover/{id}")
    @Secured({ "ROLE_ACC_REC" })
    public ResponseEntity<?> accountRecover(@PathVariable("id") int ID, @RequestBody Users userData) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Users user = service.getUserByID(ID);
            user.setId(userData.getId());
            user.setFullname(userData.getFullname());
            user.setPhonenumber(userData.getPhonenumber());
            user.setUsername(userData.getUsername());
            user.setPassword(passwordEncoder.encode(userData.getPassword()));
            user.setGender(userData.getGender());
            user.setRole(userData.getRole());
            service.updateUser(user);
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
    @GetMapping("uname/{uname}")
    @Secured({ "ROLE_ADMIN", "ROLE_ACC_REC" })
    public ResponseEntity<?> userByUsername(@PathVariable Map<String, String> pathVarsMap) {
        String username = pathVarsMap.get("uname");
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        map = new LinkedHashMap<String, Object>();
        List<Users> users;
        try {
            users = repo.userbyUsername(username);
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

    // user by username and password
    @GetMapping("login/{uname}/{pass}")
    public ResponseEntity<?> userByUsernamePassword(@PathVariable Map<String, String> pathVarsMap) {
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

    // user by phonenumber
    @GetMapping("phone/{phonenumber}")
    @Secured({ "ROLE_ADMIN", "ROLE_ACC_REC" })
    public ResponseEntity<?> userByPhone(@PathVariable Map<String, String> pathVarsMap) {
        long phonenumber = Long.parseLong(pathVarsMap.get("phonenumber"));
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        map = new LinkedHashMap<String, Object>();
        List<Users> users;
        try {
            users = repo.userByPhone(phonenumber);
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

    // user by email
    @GetMapping("email/{email}")
    @Secured({ "ROLE_ADMIN", "ROLE_ACC_REC" })
    public ResponseEntity<?> userByEmail(@PathVariable Map<String, String> pathVarsMap) {
        String email = pathVarsMap.get("email");
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        map = new LinkedHashMap<String, Object>();
        List<Users> users;
        try {
            users = repo.userbyEmail(email);
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

    @Autowired
    private EmailService email_service;

    // send email
    @GetMapping("mail/{to}/{subject}/{body}")
    @Secured({ "ROLE_ADMIN", "ROLE_ACC_REC" })
    public ResponseEntity<?> sendMail(@PathVariable Map<String, String> pathVarsMap) {
        String to = pathVarsMap.get("to");
        String subject = pathVarsMap.get("subject");
        String body = pathVarsMap.get("body");
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            email_service.sendEmail(to, subject, body);
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

    // send OTP
    @GetMapping("sendotp/{to}")
    @Secured({ "ROLE_ADMIN", "ROLE_ACC_REC" })
    public ResponseEntity<?> sendOTP(@PathVariable Map<String, String> pathVarsMap) {
        String to = pathVarsMap.get("to");
        String subject = "Account recovery";
        Random rand = new Random();
        String otp = new DecimalFormat("0000").format(rand.nextInt(9999));
        String body = "Your OTP for recovering your account is " + otp;
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            email_service.sendEmail(to, subject, body);
            map.put("status", 200);
            map.put("message", "OTP sent");
            map.put("otp", otp);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 500);
            map.put("message", "sending OTP failed. Internal server error.");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    // login
    @GetMapping("login")
    public String Login(@RequestParam Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        Users users = (Users) repo.getUserByUsername(username);
        password = users.getPassword();
        List<Users> users1 = repo.userLogin(username, password);
        if (!users1.isEmpty()) {
            return "200";
        } else {
            return "404";
        }
    }

    // contact us
    @PostMapping("send/{to}/{subject}/{body}")
    public ResponseEntity<?> contactUs(@PathVariable Map<String, String> pathVarsMap,
            @RequestParam("file") MultipartFile file) throws Exception {
        String to = pathVarsMap.get("to");
        String subject = pathVarsMap.get("subject");
        String body = pathVarsMap.get("body");
        MultipartFile files = file;
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            if (files.getSize() / 1000 <= 1024) {
                email_service.sendEmailAttatchment(to, subject, body, files);
                map.put("status", 200);
                map.put("message", "Mail sent");
                map.put("filesize", files.getSize() / 1000);
                System.out.println("mail sent");
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.put("status", 413);
                map.put("message", "File too large");
                map.put("Max size", "1MB");
                map.put("filesize", files.getSize() / 1000);
                System.out.println("mail failed");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Mail failed");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
}











