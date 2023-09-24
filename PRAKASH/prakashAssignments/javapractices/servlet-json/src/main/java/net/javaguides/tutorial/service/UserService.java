package net.javaguides.tutorial.service;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import net.javaguides.tutorial.model.User;

public class UserService {

	public List<User> getUsers(){
		List<User> li=new ArrayList();
		String str="select * from student";
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sqlinjection", "root", "7151");
			Statement st=con.createStatement();
			ResultSet res=st.executeQuery(str);
			while(res.next()) {
//				res.getInt(1);
//				res.getString(2);
//				res.getString(3);
//				res.getString(4);
				User u=new User(res.getString(1),res.getInt(2),res.getString(3));
			li.add(u);
			
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
		return li;
		
	}
	
	
}
