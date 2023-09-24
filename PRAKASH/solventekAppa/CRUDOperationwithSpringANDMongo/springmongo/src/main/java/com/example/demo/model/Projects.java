package com.example.demo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "projects")
public class Projects {

    @Id
    private Long id;
    private String name;
    private boolean flag;
    private String description;
    private String createddate;
    private String updatedDate;
    
    
    
    
//	public Date getCreateddate() {
//		return createddate;
//	}
    							
//	public void setCreateddate(Date createddate) {
//		this.createddate = createddate;
//	}

//	public Date getUpdatedDate() {
//		return updatedDate;
//	}
    				
//	public void setUpdatedDate(Date updatedDate) {
//		this.updatedDate = updatedDate;
//	}
    
	
	public String getCreateddate() {
		return createddate;
	}

	public void setCreateddate(String createddate) {
		this.createddate = createddate;
	}

	public String getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(String updatedDate) {
		this.updatedDate = updatedDate;
	}

	public boolean isFlag() {
		return flag;
	}
	
	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Projects() {
		super();
	}
	
	public Projects(Long id, String name, boolean flag, String description, String createddate, String updatedDate) {
		super();
		this.id = id;
		this.name = name;
		this.flag = flag;
		this.description = description;
		this.createddate = createddate;
		this.updatedDate = updatedDate;
	}
	
	@Override
	public String toString() {
		return "Programmes [id=" + id + ", name=" + name + ", flag=" + flag + ", description=" + description
				+ ", createddate=" + createddate + ", updatedDate=" + updatedDate + "]";
	}


	

}








