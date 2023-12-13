package com.yprs.dependencyinjection.constructorinjection;

import org.springframework.core.annotation.Order;

public class Customer {



private String name;
private String contact;
private int age;


public Customer(String name,String contact,int age){
	this.name=name;
	this.contact=contact;
	this.age=age;
	
}


@Override
public String toString() {
	return "Customer [name=" + name + ", contact=" + contact + ", age=" + age + ", getClass()=" + getClass()
			+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
}}
