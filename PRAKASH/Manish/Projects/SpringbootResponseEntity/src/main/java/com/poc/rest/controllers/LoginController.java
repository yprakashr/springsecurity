package com.poc.rest.controllers;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.poc.rest.connection.ConnectionProvider;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class LoginController {

    @GetMapping("/loginAction")
    public void loginAction(HttpServletResponse response, HttpServletRequest request)
            throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        int flag = 0;

        try {
            Connection con = ConnectionProvider.getCon();
            Statement st = con.createStatement();
            ResultSet rs = st
                    .executeQuery(
                            "select * from users where fullname='" + username + "' and password='" + password + "'");

            while (rs.next()) {
                flag = 1;
                response.sendRedirect("appointmentsPage");
            }
            if (flag == 0) {
                response.sendRedirect("login?msg=invalid");
            }
        } catch (Exception e) {
            response.sendRedirect("login?msg=error");
            e.printStackTrace();
        }
    }
}
