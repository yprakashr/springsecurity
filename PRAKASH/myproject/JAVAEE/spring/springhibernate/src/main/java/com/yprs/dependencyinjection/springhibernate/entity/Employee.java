package com.yprs.dependencyinjection.springhibernate.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
	@Id
private int id;
private String name;
private String address;
private int contact;
private int exp;
public Employee() {}
public Employee(int id, String name, String address, int contact, int exp) {
	super();
	this.id = id;
	this.name = name;
	this.address = address;
	this.contact = contact;
	this.exp = exp;
}
@Override
public String toString() {
	return "Employee [id=" + id + ", name=" + name + ", address=" + address + ", contact=" + contact + ", exp=" + exp
			+ "]";
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getContact() {
	return contact;
}
public void setContact(int contact) {
	this.contact = contact;
}
public int getExp() {
	return exp;
}
public void setExp(int exp) {
	this.exp = exp;
}
}
