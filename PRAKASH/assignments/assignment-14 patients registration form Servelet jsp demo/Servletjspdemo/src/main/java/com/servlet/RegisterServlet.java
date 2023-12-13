package com.servlet;

import java.io.IOException;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

import com.connection.DBConn;
import com.dao.Daopatient;
import com.entity.Patient;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
		String name = request.getParameter("name");
		String dob = request.getParameter("dob");
		String email = request.getParameter("email");
		String pno = request.getParameter("no");
		Patient patient = new Patient(name, dob, email, pno);
		Daopatient dao = new Daopatient(DBConn.getconn());

		HttpSession	session =request.getSession();
		
		boolean f = dao.addPatient(patient);
		if (f) {
			session.setAttribute("successmsg", "patient inserted successfully...");
			response.sendRedirect("add_patient.jsp");
			System.out.println("patient inserted successfully...");
		} else {
			session.setAttribute("errormsg", "Some thing wrong on server...");
			response.sendRedirect("add_patient.jsp");
			System.out.println("Some thing wrong on server...");
		}

	}

	

}












