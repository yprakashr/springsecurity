package com.poc.rest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Appointments {
	@Id
	int id;
	String firstname;
	String lastname;
	int age;
	String phonenumber;
	String gender;
	String date;
	String time;
	String city;
	String area;
	String vaccination_status;
	String symptoms;
	String add_info;

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getVaccination_status() {
		return vaccination_status;
	}

	public void setVaccination_status(String vaccination_status) {
		this.vaccination_status = vaccination_status;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public String getAdd_info() {
		return add_info;
	}

	public void setAdd_info(String add_info) {
		this.add_info = add_info;
	}

	@Override
	public String toString() {
		return "Appointments [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", age=" + age
				+ ", phonenumber=" + phonenumber + ", gender=" + gender + ", date=" + date + ", time=" + time
				+ ", city=" + city + ", area=" + area + ", vaccination_status=" + vaccination_status + ", symptoms="
				+ symptoms + ", add_info=" + add_info + "]";
	}
}
