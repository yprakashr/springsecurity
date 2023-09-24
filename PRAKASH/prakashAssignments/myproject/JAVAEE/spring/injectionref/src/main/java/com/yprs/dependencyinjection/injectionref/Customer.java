package com.yprs.dependencyinjection.injectionref;

import java.util.Properties;

public class Customer {

	private String name;
	private String contact;
	private Properties address;
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
	public Properties getAddress() {
		return address;
	}
	public void setAddress(Properties address) {
		this.address = address;
	}
}
