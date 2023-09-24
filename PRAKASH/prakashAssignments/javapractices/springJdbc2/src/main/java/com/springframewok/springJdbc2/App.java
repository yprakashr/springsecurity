package com.springframewok.springJdbc2;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import business.EmployeeBusiness;
import dto.Employee;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
ApplicationContext context=new ClassPathXmlApplicationContext("config.xml");
//Resource resource=new ClassPathResource("config.xml");
//BeanFactory factory=new XmlBeanFactory(resource);



 EmployeeBusiness employeeBusiness=  (EmployeeBusiness) context.getBean("employeeBusiness");

// Employee emp=new Employee( "vinod", 25);
// employeeBusiness.printEmployeeHikes();
// employeeBusiness.insertEmployee(emp);
Employee emp=employeeBusiness.getEmployeeById(5);    
    System.out.println(emp);
    
    }
}
