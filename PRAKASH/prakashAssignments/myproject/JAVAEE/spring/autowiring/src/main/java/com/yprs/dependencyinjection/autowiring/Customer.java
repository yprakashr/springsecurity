package com.yprs.dependencyinjection.autowiring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Customer {

	private String name;
	private String contact;
	private int age;
	
	public Customer() {}
	
	public Customer(String name,String contact,int age){
		this.name=name;
		this.contact=contact;
		this.age=age;
	}
	

	@Override
	public String toString() {
		return "Customer [name=" + name + ", contact=" + contact + ", age=" + age + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	
}
