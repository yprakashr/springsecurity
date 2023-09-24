package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;



@Data

@Entity
public class Patient {

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String fullName;
	private String date;
	private String time;
	private int age;
	private long phoneno;
	private String gender;
	
	
//	public long getId() {
//		return id;
//	}
//	public void setId(long id) {
//		this.id = id;
//	}
//	public String getFullName() {
//		return fullName;
//	}
//	public void setFullName(String fullName) {
//		this.fullName = fullName;
//	}
//	public String getDate() {
//		return date;
//	}
//	public void setDate(String date) {
//		this.date = date;
//	}
//	public String getTime() {
//		return time;
//	}
//	public void setTime(String time) {
//		this.time = time;
//	}
//	public String getAge() {
//		return age;
//	}
//	public void setAge(String age) {
//		this.age = age;
//	}
//	public String getPhoneno() {
//		return phoneno;
//	}
//	public void setPhoneno(String phoneno) {
//		this.phoneno = phoneno;
//	}
//	public String getGender() {
//		return gender;
//	}
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//	public Patient(long id, String fullName, String date, String time, String age, String phoneno, String gender) {
//		super();
//		this.id = id;
//		this.fullName = fullName;
//		this.date = date;
//		this.time = time;
//		this.age = age;
//		this.phoneno = phoneno;
//		this.gender = gender;
//	}
//	public Patient() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	@Override
//	public String toString() {
//		return "Patient [id=" + id + ", fullName=" + fullName + ", date=" + date + ", time=" + time + ", age=" + age
//				+ ", phoneno=" + phoneno + ", gender=" + gender + "]";
//	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public long getPhoneno() {
		return phoneno;
	}
	
	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public Patient(long id, String fullName, String date, String time, int age, long phoneno, String gender) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.date = date;
		this.time = time;
		this.age = age;
		this.phoneno = phoneno;
		this.gender = gender;
		
	}
	
	
	public Patient() {
		super();
		
	}
	
}









