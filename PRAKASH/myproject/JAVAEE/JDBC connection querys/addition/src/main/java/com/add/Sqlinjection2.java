package com.add;


import java.io.*;

import java.sql.*;
import java.util.Scanner;

public class Sqlinjection2 {
	
	
	public static void main(String[] args) throws Exception {
		String url = "jdbc:mysql://localhost:3306/sqlinjection";
		String userName = "root";
		String password = "7151";
//		Scanner sc=new Scanner(System.in);
	InputStreamReader i=new InputStreamReader(System.in);
	BufferedReader b=new BufferedReader(i);
	Connection con = null;
	Statement stmt=null;
	System.out.println("please enter your username");
	String name=b.readLine();	
//	String name=sc.next();
	System.out.println("please enter your password");
	String id=b.readLine();
//	int id=sc.nextInt();
//	System.out.println("please enter your city");
//	String city=b.readLine();
//	String city=sc.next();
	
	
	try {
		con = DriverManager.getConnection(url, userName, password);
		System.out.println("connection established");
		stmt = con.createStatement();
		String qry="select balance from bankbalance where username='"+name+"'and password='"+id+"'";
		System.out.println("our query is :"+qry);
		ResultSet rs= stmt.executeQuery(qry);
		if(rs.next()) {
			System.out.println("balance is :"+rs.getInt(1));
		}
		else {
			System.out.println("please enter valid creditentials");
		}
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		System.out.println(e.getMessage());
	}
	finally {
	 con.close();
	}
	}
}

