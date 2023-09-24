package jdbcdemos;

import java.sql.*;

public class JDBCEx {

	public static void main(String[] args)  {
		String url = "jdbc:oracle:thin:@localhost:1521:ORACLE";
		String userName = "system";
		String password = "7151";

		Connection con = null;
		try {
			con = DriverManager.getConnection(url, userName, password);
			Statement stmt = con.createStatement();
			System.out.println("statement executed");
			stmt.executeUpdate("insert into student values('vijay',122,'hyderabad')");
			stmt.executeUpdate("insert into student values('kumar',123,'hyderabad')");
			System.out.println("printed successfully");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.toString());
		}
		finally {
		try {
			if(con!=null) {
			con.close();}
			System.out.println("connection closed");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
	}
}
