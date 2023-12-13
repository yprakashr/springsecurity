package com.yprs.dependencyinjection.Employeedto;

public class Employee {
int id;
String name;
@Override
public String toString() {
	return "Employee [id=" + id + ", name=" + name + ", exp=" + exp + ", getId()=" + getId() + ", getName()="
			+ getName() + ", getExp()=" + getExp() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
			+ ", toString()=" + super.toString() + "]";
}
int exp;
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
public int getExp() {
	return exp;
}
public void setExp(int exp) {
	this.exp = exp;
}
public Employee(int id, String name, int exp) {
	super();
	this.id = id;
	this.name = name;
	this.exp = exp;
}
public Employee() {
}
}
