package dao;

import java.util.List;

import dto.Employee;

public interface EmployeeDao {

	void insertEmployee(Employee emp);
	List<Employee> findAllEmployee();
	Employee getEmployeeById();
}
