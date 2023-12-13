package jdbcdemos;


import java.io.*;

import java.sql.*;

public class Sqlinjectionex {
	
	
	public static void main(String[] args) throws Exception {
		String url = "jdbc:oracle:thin:@localhost:1521:ORACLE";
		String userName = "system";
		String password = "7151";
		
	InputStreamReader i=new InputStreamReader(System.in);
	BufferedReader b=new BufferedReader(i);
	Connection con = null;
	con = DriverManager.getConnection(url, userName, password);
	Statement stmt = con.createStatement();	
	
	System.out.println("please enter your name");
	String name=b.readLine();	
	System.out.println("please enter your id");
	String id=b.readLine();
	System.out.println("please enter your city");
	String city=b.readLine();
	
	
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
