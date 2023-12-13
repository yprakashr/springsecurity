package com.yprs.dependencyinjection.constructorinjection;

public class Order {
private String name;
private String contact;
private int age;
private Customer customer;

public Order(String name,String contact,int age,Customer customer){
	this.name=name;
	this.contact=contact;
	this.age=age;
	this.customer=customer;
	
}

@Override
public String toString() {
	return "Order [name=" + name + ", contact=" + contact + ", age=" + age + ", customer=" + customer + ", getClass()="
			+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
}





}
