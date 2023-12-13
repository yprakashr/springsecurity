package com.springboot.entity;

import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Users {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(unique=true)
	private long 	 id;

	private String 	 fullname;
	private String 	 username;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String 	 password;
	private long	 phone;
	private String 	 email;
	private String 	 gender;
 
	   @JsonIgnore
	    @OneToMany(mappedBy="customer",fetch=FetchType.EAGER)
	    private Set<Roles> role;


	public Set<Roles> getRole() {
		return role;
	}
	public void setRole(Set<Roles> role) {
		this.role = role;
	}
	public Users() {
		super();

	}

	
	
	@Override
	public String toString() {
		return "Users [id=" + id + ", fullname=" + fullname + ", username=" + username + ", password=" + password
				+ ", phone=" + phone + ", email=" + email + ", gender=" + gender + ", role=" + role + "]";
	}
	public Users(long id, String fullname, String username, String password, long phone, String email, String gender,
			Set<Roles> role) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.username = username;
		this.password = password;
		this.phone = phone;
		this.email = email;
		this.gender = gender;
		this.role = role;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}


}






