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


@WebServlet("/delete")
public class Deleteservlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		int id = Integer.parseInt(request.getParameter("id"));
	
		Daopatient dao=new Daopatient(DBConn.getconn());
		boolean f=dao.deletePatient(id);
		HttpSession	session =request.getSession();
		
		if (f) {
			session.setAttribute("successmsg", "patient deleted successfully...");
			response.sendRedirect("index.jsp");
			System.out.println("patient deleted successfully...");
		} else {
			session.setAttribute("errormsg", "Some thing wrong on server...");
			response.sendRedirect("index.jsp");
			System.out.println("Some thing wrong on server...");
		}
		
	}
	
	
	
	
	
	

}
