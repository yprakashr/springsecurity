package com.yprs.dependencyinjection.setterinjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
ApplicationContext context=new ClassPathXmlApplicationContext("setgetinj.xml");
    
  Customer customer=(Customer)context.getBean("cus");
    
    System.out.println("Name :"+customer.getName());
    System.out.println("contact :"+customer.getContact());
    System.out.println("Address :"+customer.getAddress());

    
    
    }
}
