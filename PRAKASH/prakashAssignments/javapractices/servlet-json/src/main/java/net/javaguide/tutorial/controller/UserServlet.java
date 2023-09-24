package net.javaguide.tutorial.controller;

//import jakarta.servlet.ServletException;
//
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
import net.javaguides.tutorial.model.User;
import net.javaguides.tutorial.service.UserService;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
//@WebServlet("/users")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	UserService service=new UserService();
    public UserServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<User> users=new ArrayList();
	users=service.getUsers();
	Gson gson=new Gson();
	String str= gson.toJson(users);
	PrintWriter wr=response.getWriter();
	response.setContentType("application/json");
	response.setCharacterEncoding("UTF-8");
	wr.write(str);
	wr.close();
	
	}

	

}
