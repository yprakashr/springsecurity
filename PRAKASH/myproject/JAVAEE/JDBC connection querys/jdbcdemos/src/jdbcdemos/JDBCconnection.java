package jdbcdemos;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCconnection {
	public static void main(String[] args) throws Exception {
		String sql="create table student(name varchar(20),studId integer primary key,city varchar(20))";
		Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORACLE", "system", "7151");
		Statement st=con.createStatement();
		boolean result=st.execute(sql);
		System.out.println("table created"+result);
		
		if(st!=null) {
		st.close();  
		}
		if(con!=null) {
		con.close(); 
		}}}
