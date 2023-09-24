package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userreg")
public class UserRegistration {
	private Long id;
	private String	firstname;
	private String lastname;
	private String email;
	private String password;
	private String token;
	private String flag;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	@Override
	public String toString() {
		return "UserRegistration [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + ", token=" + token + ", flag=" + flag + "]";
	}
	public UserRegistration(Long id, String firstname, String lastname, String email, String password, String token,
			String flag) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.token = token;
		this.flag = flag;
	}
	public UserRegistration() {
		super();
	}
	

	
	
	

}
