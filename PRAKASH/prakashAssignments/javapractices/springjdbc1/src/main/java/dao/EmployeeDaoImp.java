package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import dto.Employee;

public class EmployeeDaoImp implements EmployeeDao {

	public void insertEmployee(Employee emp) {

		
		
	}

	public List<Employee> findAllEmployee() {
		List<Employee> employees=new ArrayList<Employee>();
		String driver="com.mysql.jdbc.Driver";
		String url="jdbc:mysql://localhost:3306/springjdbc";
		String uname="root";
		String password="7151";
		
		try {
			Class.forName(driver);
			Connection con=DriverManager.getConnection(url, uname, password);
			Statement st=con.createStatement();
			ResultSet rs=st.executeQuery("select * from employee");
			
			while(rs.next()) {
				int   id=rs.getInt(1);
				String name=rs.getString(2);
				int exp=rs.getInt(3);
				
				Employee emp=new Employee(id,name,exp);
				employees.add(emp);	
			}			
		
			con.close();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return employees;
	}

	public Employee getEmployeeById() {
		
		
		
		return null;
	}

}
