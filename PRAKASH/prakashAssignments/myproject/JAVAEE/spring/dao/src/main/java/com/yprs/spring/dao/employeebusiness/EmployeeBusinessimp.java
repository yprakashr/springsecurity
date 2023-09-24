package com.yprs.spring.dao.employeebusiness;

import java.util.List;

import com.yprs.spring.dao.employeeDao.EmployeeDao;
import com.yprs.spring.dao.employeedto.Employee;

public class EmployeeBusinessimp implements Employeebusiness{

	private EmployeeDao employeedao;
	
	public EmployeeBusinessimp(EmployeeDao employeedao) {
		super();
		this.employeedao = employeedao;
	}

	public EmployeeDao getEmployeedao() {
		return employeedao;
	}

	public void setEmployeedao(EmployeeDao employeedao) {
		this.employeedao = employeedao;
	}

	public void printEmployeeHikes() {
		
		List<Employee> employees=employeedao.findAllEmployees();
		
		
		if(employees!=null) {
			for(Employee employe:employees) {
				if(employe.getExp()>=15) {
					System.out.println("Employee with id"+employe.getId()+"and name "+employe.getName()+"and exp"+employe.getExp()+"got 30% hike");
				}
				if(employe.getExp()>=10) {
					System.out.println("Employee with id"+employe.getId()+"and name "+employe.getName()+"and exp"+employe.getExp()+"got 15% hike");
				}
				
				if(employe.getExp()>=5) {
					System.out.println("\"Employee with id"+employe.getId()+"and name"+employe.getName()+"and exp"+employe.getExp()+"got 20% hike");
				}
			}
		}
	}
}
