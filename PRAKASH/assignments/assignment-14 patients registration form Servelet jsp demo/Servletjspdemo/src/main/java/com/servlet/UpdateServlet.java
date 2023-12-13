package com.servlet;

import java.io.IOException;

import com.connection.DBConn;
import com.dao.Daopatient;
import com.entity.Patient;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@WebServlet("/update")
public class UpdateServlet extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String dob = request.getParameter("dob");
		String email = request.getParameter("email");
		String pno = request.getParameter("no");
		int id = Integer.parseInt(request.getParameter("id"));
		
		
		
		Patient patient = new Patient(id,name, dob, email, pno);
		
		Daopatient dao = new Daopatient(DBConn.getconn());
		
		HttpSession	session =request.getSession();
		
	boolean f=dao.updatePatient(patient);
	if (f) {
		session.setAttribute("successmsg", "patient updated successfully...");
		response.sendRedirect("Edit_patient.jsp");
		System.out.println("patient updated successfully...");
	} else {
			session.setAttribute("errormsg", "Some thing wrong on server...");
		response.sendRedirect("Edit_patient.jsp");
		System.out.println("Some thing wrong on server...");
	}

		
	}

	
}
