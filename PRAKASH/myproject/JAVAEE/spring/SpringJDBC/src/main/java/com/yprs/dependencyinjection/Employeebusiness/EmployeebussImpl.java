package com.yprs.dependencyinjection.Employeebusiness;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yprs.dependencyinjection.Employeedao.Employeedaoimpl;
import com.yprs.dependencyinjection.Employeedto.Employee;

@Component
public class EmployeebussImpl implements EmployeeBussiness {
	@Autowired
	Employeedaoimpl emp;

	public EmployeebussImpl(Employeedaoimpl emp) {
		super();
		this.emp = emp;
	}

	public Employeedaoimpl getEmp() {
		return emp;
	}

	public void setEmp(Employeedaoimpl emp) {
		this.emp = emp;
	}

	public void printhike() {
		List<Employee> emp1 = emp.findallEmployees();

		if (emp1 != null) {
			for (Employee employe : emp1) {
				if (employe.getExp() >= 15) {
					System.out.println("Employee with id" + employe.getId() + "and name " + employe.getName()
							+ "and exp" + employe.getExp() + "got 30% hike");
				}
				if (employe.getExp() >= 10) {
					System.out.println("Employee with id" + employe.getId() + "and name " + employe.getName()
							+ "and exp" + employe.getExp() + "got 15% hike");
				}

				if (employe.getExp() >= 5) {
					System.out.println("\"Employee with id" + employe.getId() + "and name" + employe.getName()
							+ "and exp" + employe.getExp() + "got 20% hike");
				}
			}
		}
	}

	public Employee getEmployeeById(int id) {

		return emp.getEmployeeById(id);
	}
}
