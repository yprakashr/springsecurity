package com.yprs.dependencyinjection.autowiring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Order {
private String name;
private String contact;
private int age;
@Autowired

private Customer cus;
	public Order() {}
	Order(String name,String contact,int age,Customer cus){
		this.name=name;
		this.contact=contact;
		this.age=age;
		this.cus=cus;
	}
	public Order(Customer cus) {
		this.cus=cus; 
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

	public Customer getCus() {
		return cus;
	}

	public void setCus(Customer cus) {
		this.cus = cus;
	}

	@Override
	public String toString() {
		return "Order [name=" + name + ", contact=" + contact + ", age=" + age + ", cus=" + cus + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}


	
	
}
