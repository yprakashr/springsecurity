package com.yprs.dependencyinjection.Employeedao;

import java.util.List;

import com.yprs.dependencyinjection.Employeedto.Employee;

public interface EmployeeDao {
	public void insertEmployee(Employee employee);
	public List<Employee> findallEmployees();
	public Employee getEmployeeById(int id);
}
