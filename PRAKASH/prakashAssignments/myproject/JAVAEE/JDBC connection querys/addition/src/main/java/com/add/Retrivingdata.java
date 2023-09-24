package com.add;

import java.sql.*;

public class Retrivingdata {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/sqlinjection";
		String userName = "system";
		String password = "7151";
		ResultSet res;
		int count = 0;
		Connection con = null;
		try {
			con = DriverManager.getConnection(url, userName, password);
			Statement stmt = con.createStatement();
			res = stmt.executeQuery("select * from student");
			while (res.next()) {
				System.out.println(res.getString(1) + "," + res.getInt(2) + "," + res.getString(3));
				count++;
			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.toString());
		} finally {
			try {
				if (con != null) {
					con.close();
				}
				System.out.println("connection closed");
				System.out.println(count);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
