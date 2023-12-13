package com.yprs.dependencyinjection.Employeedao.EmployeeRowMAppers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.yprs.dependencyinjection.Employeedto.Employee;

public class EmployeeRow implements RowMapper<Employee> {

	public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
		Employee emp=new Employee();
		emp.setId(rs.getInt(1));
		emp.setName(rs.getString(2)) ;
		emp.setExp( rs.getInt(3));
		
		
		return emp;
	}

}
