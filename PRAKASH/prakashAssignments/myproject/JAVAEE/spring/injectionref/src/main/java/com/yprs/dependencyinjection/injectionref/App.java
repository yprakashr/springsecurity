package com.yprs.dependencyinjection.injectionref;

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
      ApplicationContext context=new ClassPathXmlApplicationContext("injection.xml");
      
      Order order =(Order)context.getBean("ord");
      System.out.println("Name :"+order.getProductid());
      System.out.println("contact :"+order.getProductname());
      System.out.println("Address :"+order.getCustomer().getName());
      System.out.println("Address :"+order.getCustomer().getContact());
      System.out.println("Address :"+order.getCustomer().getAddress());

      
      
      
      
    }
}
