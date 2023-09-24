package com.yprs.spring.dao.employeeDao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yprs.spring.dao.employeedto.Employee;

public class EmployeeDaoimp implements EmployeeDao {

	

	public List<Employee> findAllEmployees() {
		String driver="com.mysql.jc.jdbc.Driver";
		String url="jdbc:mysql://localhost:3306/employee";
		String username="root";
		String password="7151";
		
		List<Employee> employees=new ArrayList<Employee>();
		
		try {
			
			Class.forName(driver);
		Connection con=DriverManager.getConnection(url, username, password);
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("select * from employee");
		while(rs.next()) {
			int id=rs.getInt(1);
			String name=rs.getString(2);
			int exp=rs.getInt(3);
			Employee employee=new Employee(id,name,exp);
			
			employees.add(employee);
		}
		
		
		con.close();
		} 
		catch (Exception e) {
			e.printStackTrace();
			}
		

		
		return employees;
	}

	

}
