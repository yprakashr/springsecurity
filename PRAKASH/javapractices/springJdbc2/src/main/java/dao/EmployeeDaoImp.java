package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import dao.rowmapper.EmployeeRowMapper;
import dto.Employee;

public class EmployeeDaoImp implements EmployeeDao {
	
	
	
	@Autowired
	JdbcTemplate jdbcTemplate; 
	
	
//	public JdbcTemplate getJdbcTemplate() {
//		return jdbcTemplate;
//	}
//
//	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
//		this.jdbcTemplate = jdbcTemplate;
//	}

	public void insertEmployee(Employee emp) {
		String sql="insert into employee(name,exp) values('"+emp.getName()+"',"+emp.getExp()+")";
		jdbcTemplate.update(sql);
		System.out.println("Query:  " +sql);
		
		
	}

	public List<Employee> findAllEmployee() {
		
		EmployeeRowMapper rowMapper=new EmployeeRowMapper();
		List<Employee> employees=jdbcTemplate.query("select * from employee where exp>?", rowMapper,5);
		
		
		
		return employees;
	}

	

	public Employee getEmployeeById(int id) {
		EmployeeRowMapper rowMapper=new EmployeeRowMapper();

		Employee emp=(Employee) jdbcTemplate.queryForObject("select * from employee where id=?", rowMapper,id);
		return emp;
	}

}
