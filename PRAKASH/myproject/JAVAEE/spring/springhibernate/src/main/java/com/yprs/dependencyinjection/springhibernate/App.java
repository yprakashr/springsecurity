package com.yprs.dependencyinjection.springhibernate;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yprs.dependencyinjection.springhibernate.business.EmployeeBimp;
import com.yprs.dependencyinjection.springhibernate.business.EmployeeBusiness;
import com.yprs.dependencyinjection.springhibernate.entity.Employee;


public class App 
{
    public static void main( String[] args )
    {
    	
		ApplicationContext context=new ClassPathXmlApplicationContext("configuration.xml");
    	
    EmployeeBusiness employee=(EmployeeBimp)context.getBean("employeeBimp");
    	Employee emp=new Employee();
    	emp.setId(1);
    	emp.setName("prakash");
    	emp.setContact(99999);
    	emp.setAddress("peddamberpet");
    	emp.setExp(5);
    	
    	employee.save(emp);
    	
    	
    } 
}







