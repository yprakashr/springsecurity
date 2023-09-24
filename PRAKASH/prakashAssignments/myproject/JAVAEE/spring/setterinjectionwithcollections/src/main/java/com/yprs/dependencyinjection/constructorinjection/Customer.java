package com.yprs.dependencyinjection.constructorinjection;

import java.util.List;
import java.util.Map;

public class Customer {
private String name;
private String contact;
	private Map<String,String> address;
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
	public Map<String,String> getAddress() {
		return address;
	}
	public void setAddress(Map<String,String> address) {
		this.address = address;
	}
	
}
