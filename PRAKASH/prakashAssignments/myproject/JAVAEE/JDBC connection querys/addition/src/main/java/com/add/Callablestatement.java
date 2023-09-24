package com.add;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.*;
import java.sql.DriverManager;

import com.mysql.cj.jdbc.CallableStatement;

public class Callablestatement {
	public static void main(String[] args) throws Exception {
		String url = "jdbc:mysql://localhost:3306/sqlinjection";
		String userName = "root";
		String password = "7151";
		Connection con = null;
		
	InputStreamReader i=new InputStreamReader(System.in);
	BufferedReader b=new BufferedReader(i);
	
	System.out.println("please enter studID to get details");
	int id=Integer.parseInt(b.readLine());
//	step0: load driver
//	Class.forName()
	
//	step1: get connection
	con=DriverManager.getConnection(url,userName,password);
	
//	step2: create the statement
	java.sql.CallableStatement st=con.prepareCall("{call getame(?)}");
	st.setInt(1,id);
	
	ResultSet rs= st.executeQuery();
	if(rs.next()) {
		System.out.println("name of the student with studID"+id+"is:"+rs.getString(1));
	}else {
		System.out.println("studid not foud");
	}
//	calling insertdata procedure
	CallableStatement st2=(CallableStatement) con.prepareCall("{call insertdata()}");
	st2.executeUpdate();
  	
	
	con.close();
	
	
	}
}
