package com.yprs.dependencyinjection.constructorinjection;

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
        ApplicationContext context=new ClassPathXmlApplicationContext("constructorinjection.xml");
        
        Customer cus1=(Customer) context.getBean("cus");
        System.out.println(cus1.toString());
        Order ord=(Order) context.getBean("ord");
        System.out.println(ord.toString());
        
        
    }
}