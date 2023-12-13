package com.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConn {
private static	Connection con=null;
static String url="jdbc:mysql://localhost:3307/employee";
static String uname="root";
static String password="7151";
	public static Connection getconn()  {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection(url,uname,password);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		
		
		return con;
		
	}
	
	
	
	
	
	

}
