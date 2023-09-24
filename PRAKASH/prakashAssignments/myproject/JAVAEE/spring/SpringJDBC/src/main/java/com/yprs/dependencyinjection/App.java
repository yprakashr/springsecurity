package com.yprs.dependencyinjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yprs.dependencyinjection.Employeebusiness.EmployeeBussiness;
import com.yprs.dependencyinjection.Employeedto.Employee;

public class App 
{
    public static void main( String[] args )
    {
    @SuppressWarnings("resource")
	ApplicationContext context=new ClassPathXmlApplicationContext("daoemployee.xml");
    
//   EmployeeDao employeedao= (EmployeeDao) context.getBean("employeedao");
//   Employee employee=new Employee(16,"manish",55);
//   employeedao.insertEmployee(employee);
   EmployeeBussiness employeebus= (EmployeeBussiness) context.getBean("employeebussImpl");
   
//   employeebus.printhike();
Employee emp=employeebus.getEmployeeById(13);
if(emp!=null) {
   System.out.println(emp.toString());
    }
else {
	System.out.println("record not found");
}
    }
}
