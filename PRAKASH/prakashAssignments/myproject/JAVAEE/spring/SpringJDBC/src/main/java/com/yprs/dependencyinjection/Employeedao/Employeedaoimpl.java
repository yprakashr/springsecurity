package com.yprs.dependencyinjection.Employeedao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.yprs.dependencyinjection.Employeedao.EmployeeRowMAppers.EmployeeRow;
import com.yprs.dependencyinjection.Employeedto.Employee;

@Component
public class Employeedaoimpl implements EmployeeDao {
	@Autowired
	JdbcTemplate jdbctemplate;

	public JdbcTemplate getJdbctemplate() {
		return jdbctemplate;
	}

	public void setJdbctemplate(JdbcTemplate jdbctemplate) {
		this.jdbctemplate = jdbctemplate;
	}

	public void insertEmployee(Employee employee) {
		String sql = "insert into employee values(" + employee.getId() + ",'" + employee.getName() + "',"
				+ employee.getExp() + ")";
		String sql1 = "insert into employess values(?,?,?)";
		System.out.println(sql);
		jdbctemplate.update(sql1, employee.getId(), employee.getName(), employee.getExp());
	}

	public List<Employee> findallEmployees() {
		EmployeeRow row = new EmployeeRow();
		List<Employee> emp = jdbctemplate.query("select * from employess", row);

		return emp;

	}

	public Employee getEmployeeById(int id) {
		EmployeeRow row = new EmployeeRow();

		Employee emp = jdbctemplate.queryForObject("select * from employess where id=?", row, id);

		return emp;
	}
}
