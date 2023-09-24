package com.yprs.dependencyinjection.start;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ){
       
    	ApplicationContext context=new ClassPathXmlApplicationContext("create.xml");
    	
    	Start st= (Bike)context.getBean("vehicle");
    	st.start();
    	
    }
}
