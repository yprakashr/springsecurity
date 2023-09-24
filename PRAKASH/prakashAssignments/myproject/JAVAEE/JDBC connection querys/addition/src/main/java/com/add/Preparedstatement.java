package com.add;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class Preparedstatement {
public static void main(String[] args) throws Exception {
	String url = "jdbc:mysql://localhost:3306/sqlinjection";
	String userName = "root";
	String password = "7151";
	Connection con = null;
	String qry="insert into student values(?,?,?)";
	Scanner sc=new Scanner(System.in);



//		InputStreamReader i=new InputStreamReader(System.in);
//		BufferedReader b=new BufferedReader(i);

		System.out.println("please enter your username");
//		String name=b.readLine();	
		String name=sc.next();
		System.out.println("please enter your password");
//		int id=b.read();
		int id=sc.nextInt();
		System.out.println("please enter your city");
//		String location=b.readLine();
		String city=sc.next();
			con = DriverManager.getConnection(url, userName, password);
		System.out.println("connection established");
		PreparedStatement stmt = con.prepareStatement(qry);	
		stmt.setString(1,name);
		stmt.setInt(2, id);
		stmt.setString(3,city);
		stmt.executeUpdate();
		System.out.println("query inserted");
		con.close();
		System.out.println("connection closed");
	
}

}

