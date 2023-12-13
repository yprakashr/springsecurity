package com.entity;

public class Patient {
private int id;
private String Fullname;
private String DOB;
private String email;
private String number;
public Patient(int id, String fullname, String dOB, String email, String number) {
	super();
	this.id = id;
	Fullname = fullname;
	DOB = dOB;
	this.email = email;
	this.number = number;
}
public Patient(String fullname, String dOB, String email, String pno) {
	
	this.Fullname = fullname;
	this.DOB = dOB;
	this.email = email;
	this.number = pno;
}
public Patient() {
	super();
}
@Override
public String toString() {
	return "Patient [id=" + id + ", Fullname=" + Fullname + ", DOB=" + DOB + ", email=" + email + ", number=" + number
			+ "]";
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFullname() {
	return Fullname;
}
public void setFullname(String fullname) {
	Fullname = fullname;
}
public String getDOB() {
	return DOB;
}
public void setDOB(String dOB) {
	DOB = dOB;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getNumber() {
	return number;
}
public void setNumber(String number) {
	this.number = number;
}


}
