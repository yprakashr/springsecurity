package user.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import user.model.User;

public class UserDao {

	private String jdbcURL="jdbc:mysql://localhost:3306/demo?useSSL=false";
	private String jdbcUsername="root";
	private String jdbcPassword="7151";
	
	private static final String INSERT_USER_SQL="insert into users"+"(name,email,country)"+"(?,?,?);";
	
	private static final String SELECT_USER_BY_ID="select id,name,country form users where id=?;";
	private static final String SELECT_ALL_USER="select * from users";
	private static final String DELETE_USERS_SQL="delete from users where id=?;";
	private static final String UPDATE_USER_SQL="UPDATE USERS SET NAME=?,EMAIL=?,COUNTRY=? WHERE ID=?;";
	
	protected Connection getConnection() {
		try {
			Connection connection=DriverManager.getConnection(jdbcURL,jdbcUsername,jdbcPassword);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	//create or insert user
	public void insertUser(User user) throws SQLException {
		try(Connection connection=getConnection();
				PreparedStatement pstmt=connection.prepareStatement(INSERT_USER_SQL);){
		pstmt.setString(1, user.getName());
		pstmt.setString(2, user.getEmail());
		pstmt.setString(3, user.getCountry());
		}
	}
	

//	update user
public boolean updateUser(User user) throws SQLException {
	boolean rowupdated;
	
	try(Connection connection=getConnection();
			PreparedStatement pstmt=connection.prepareStatement(UPDATE_USER_SQL);){
		
		pstmt.setString(1, user.getName());
		pstmt.setString(2, user.getEmail());
		pstmt.setString(3, user.getCountry());
		pstmt.setInt(4, user.getId());
	rowupdated=pstmt.executeUpdate()>0;	
	}
	return rowupdated;
}


//select all user 
public List<User> selectAllusers() {
	List<User> users=new ArrayList();
	
	try(Connection connection=getConnection();
			PreparedStatement pstmt=connection.prepareStatement(SELECT_ALL_USER)){
	
		System.out.println(pstmt);
		ResultSet rs=pstmt.executeQuery();
		
		while(rs.next()) {
			String name=rs.getString("name");
			String email=rs.getString("email");
			String country=rs.getString("country");
	users.add(new User(name,email,country));
		}
		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return users;	
}



//select  users id
public User selectUserById(int id) {
//	List<User> users=new ArrayList();
	User user=null;
//	step:1 Establishing a connection
	try(Connection connection=getConnection();
//			step:2 creating a statement
			PreparedStatement pstmt=connection.prepareStatement(SELECT_USER_BY_ID)){
	
		System.out.println(pstmt);
		
//		step:3 execute the query or update query
		pstmt.setInt(1, id);
		ResultSet rs=pstmt.executeQuery();
		
//		step:4 process the result set
		while(rs.next()) {
			String name=rs.getString("name");
			String email=rs.getString("email");
			String country=rs.getString("country");
user=new User(id,name,email,country);
		}
		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return user;	
}



//delete users
public boolean deleteUserById(int id) throws SQLException {
	boolean rowdeleted  ;
	
	try(Connection connection=getConnection();
			PreparedStatement pstmt=connection.prepareStatement(DELETE_USERS_SQL)){
		pstmt.setInt(1, id);
		
			
		rowdeleted=pstmt.executeUpdate()>0;
		
	}
	return rowdeleted;	
}}






































