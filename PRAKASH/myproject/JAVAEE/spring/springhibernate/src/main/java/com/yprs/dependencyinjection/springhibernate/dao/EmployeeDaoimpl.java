package com.yprs.dependencyinjection.springhibernate.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yprs.dependencyinjection.springhibernate.entity.Employee;


@Component
public class EmployeeDaoimpl implements EmployeeDao {
	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Transactional(readOnly=false)
	public void save(Employee employee) {
		hibernateTemplate.save(employee);

	}

	public void update(Employee employee) {
		hibernateTemplate.update(employee);
	}

	public void delete(Employee employee) {
		hibernateTemplate.delete(employee);
	}


	public Employee findById(int id) {
		
		return hibernateTemplate.get(Employee.class, id);
	}

	public List<Employee> findAll() {
		return hibernateTemplate.loadAll(Employee.class);
	}

	

}
