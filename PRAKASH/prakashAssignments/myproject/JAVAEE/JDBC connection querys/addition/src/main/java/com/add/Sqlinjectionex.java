package com.add;d


import java.io.*;

import java.sql.*;
import java.util.Scanner;

public class Sqlinjectionex {
	
	
	public static void main(String[] args) throws Exception {
		String url = "jdbc:mysql://localhost:3306/sqlinjection";
		String userName = "root";
		String password = "7151";
//		Scanner sc=new Scanner(System.in);
	InputStreamReader i=new InputStreamReader(System.in);
	BufferedReader b=new BufferedReader(i);
	Connection con = null;
	con = DriverManager.getConnection(url, userName, password);
	Statement stmt = con.createStatement();	
	
	System.out.println("please enter your name");
	String name=b.readLine();	
//	String name=sc.next();
	System.out.println("please enter your id");
	String id=b.readLine();
//	int id=sc.nextInt();
	System.out.println("please enter your city");
	String city=b.readLine();
//	String city=sc.next();
	
	
	try {
		con = DriverManager.getConnection(url, userName, password);
		System.out.println("connection established");
		stmt = con.createStatement();
		stmt.executeQuery("insert into student values('"+name+"',"+id+",'"+city+"')");
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
