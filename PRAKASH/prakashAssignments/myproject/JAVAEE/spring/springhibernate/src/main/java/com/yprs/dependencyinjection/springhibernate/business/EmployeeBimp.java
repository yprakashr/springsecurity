package com.yprs.dependencyinjection.springhibernate.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yprs.dependencyinjection.springhibernate.dao.EmployeeDao;
import com.yprs.dependencyinjection.springhibernate.entity.Employee;

@Component("employeeBimp")
public class EmployeeBimp implements EmployeeBusiness {
	
	private	EmployeeDao employeedao;
	
	public EmployeeBimp(EmployeeDao employeedao) {
		super();
		this.employeedao = employeedao;
	}

	public EmployeeDao getEmployeedao() {
		return employeedao;
	}

	public void setEmployeedao(EmployeeDao employeedao) {
		this.employeedao = employeedao;
	}
	
	public void save(Employee employee) {
		employeedao.save(employee);
	}

	public void update(Employee employee) {
		employeedao.update(employee);
	}

	public void delete(Employee employee) {
		employeedao.delete(employee);
	}

	public Employee findById(int id) {
		return employeedao.findById(id);
	}

	public List<Employee> findAll(Employee employee) {
		
		return employeedao.findAll();
	}

}
