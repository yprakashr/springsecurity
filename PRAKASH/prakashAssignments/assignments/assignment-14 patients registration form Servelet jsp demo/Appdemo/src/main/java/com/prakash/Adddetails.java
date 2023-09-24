package com.prakash;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Adddetails extends HttpServlet{
	
	public void service(HttpServletRequest request,HttpServletResponse response) {
		
		 	String Firstname=request.getParameter("fn");
			String Lastname=request.getParameter("ln");
			String city=request.getParameter("city");
			Connection con=null;
			PreparedStatement pstmt=null;
		
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			 con=DriverManager.getConnection( "jdbc:mysql://localhost:3307/employee", "root", "7151");
			String SQL = "INSERT INTO details VALUES (?, ?, ?)";
			 pstmt=con.prepareStatement(SQL);
			pstmt.setString(1, "Firstname");
			pstmt.setString(2, "Lastname");
			pstmt.setString(3, "city");
			boolean result= pstmt.execute();
			System.out.println("record inserted successfully");
			
	try {
		PrintWriter w=response.getWriter();
	w.println("inserted:  "+result);
	}catch (IOException e) {
		e.printStackTrace();
	}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			if(pstmt!=null) {
				try {
					pstmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(con!=null) {
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
	}
	

}
