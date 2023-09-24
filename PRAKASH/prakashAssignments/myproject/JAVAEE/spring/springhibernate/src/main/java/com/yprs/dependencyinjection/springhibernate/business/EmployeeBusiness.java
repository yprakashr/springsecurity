package com.yprs.dependencyinjection.springhibernate.business;

import java.util.List;

import com.yprs.dependencyinjection.springhibernate.entity.Employee;

public interface EmployeeBusiness {
	
		public void save(Employee employee);
		public void update(Employee employee);
		public void delete(Employee employee);
		public Employee findById(int id);
		public List<Employee> findAll(Employee employee);
	}
	







