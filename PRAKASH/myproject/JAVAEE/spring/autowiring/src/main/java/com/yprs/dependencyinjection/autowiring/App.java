package com.yprs.dependencyinjection.autowiring;

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
   ApplicationContext context= new ClassPathXmlApplicationContext("autowire.xml");
    
    Order or=(Order) context.getBean("ord");
    System.out.println(or.toString());
    
//    Customer or=(Customer) context.getBean("cus");
//    System.out.println(or.toString());
    
    }
}
