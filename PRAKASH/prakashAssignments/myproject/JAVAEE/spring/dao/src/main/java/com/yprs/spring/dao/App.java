package com.yprs.spring.dao;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yprs.spring.dao.employeebusiness.EmployeeBusinessimp;
import com.yprs.spring.dao.employeebusiness.Employeebusiness;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context=new ClassPathXmlApplicationContext("daooperation.xml");
    	
    	EmployeeBusinessimp employeeBusiness=(EmployeeBusinessimp)context.getBean("employeeBusiness");
    	
    	employeeBusiness.printEmployeeHikes();
    	
    }
}


