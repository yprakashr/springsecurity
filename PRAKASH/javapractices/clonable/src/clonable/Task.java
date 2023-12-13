package clonable;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Task implements Comparable<Task>{
String name;
int age;
double salary;


public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	
	this.age = age;
}
public double getSalary() {
	return salary;
}
public void setSalary(double salary) {
	this.salary = salary;
}
public Task(String name, int age, double salary) {
	super();
	this.name = name;
	this.age = age;
	this.salary = salary;
}

@Override
public String toString() {
	return "Task [name=" + name + ", age=" + age + ", salary=" + salary + "]";
}
@Override
public int compareTo(Task o) {
	// TODO Auto-generated method stub
	return 0;
}


}
