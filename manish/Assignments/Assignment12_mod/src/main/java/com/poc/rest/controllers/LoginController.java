package com.poc.rest.controllers;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poc.rest.connection.ConnectionProvider;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class LoginController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/loginAction")
    @ResponseBody
    public int loginAction(@RequestParam String username, @RequestParam String password, HttpServletResponse response,
            HttpServletRequest request)
            throws IOException, SQLException {
        username = request.getParameter("username");
        password = request.getParameter("password");
        int flag = 0;

        Connection con = ConnectionProvider.getCon();
        Statement st = con.createStatement();
        ResultSet rs = st
                .executeQuery("select * from users where fullname='" + username + "' and password='" + password + "'");

        while (rs.next()) {
            flag = 1;
        }

        if (flag == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
