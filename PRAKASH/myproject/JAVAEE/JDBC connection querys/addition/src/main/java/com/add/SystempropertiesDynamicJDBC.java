package com.add;

import java.sql.*;

public class SystempropertiesDynamicJDBC {

	public static void main(String[] args) throws Exception {
		String url = System.getProperty("ur");
		String username= System.getProperty("un");
		String password= System.getProperty("pwd");
		String qry="select * from student";
		Connection con=DriverManager.getConnection(url, username, password);
		
		PreparedStatement st=con.prepareStatement(qry);
		ResultSet s= st.executeQuery();
		System.out.println(s);

con.close();	
	
	}

}


//Types of JDBC Drivers 
//type1: JDBC-ODBC bridge driver
//type2:Driver-native-API driver
//type3:Driver Networkprotocol driver(JDBC net pure java driver)
//type4:driver-thin driver (pure java driver)










