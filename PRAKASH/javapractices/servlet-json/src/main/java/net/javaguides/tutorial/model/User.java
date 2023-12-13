package net.javaguides.tutorial.model;

import java.sql.Date;

public class User {
private String name;
private int studId;
private String city;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getStudId() {
	return studId;
}
public void setStudId(int studId) {
	this.studId = studId;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public User(String name, int studId, String city) {
	super();
	this.name = name;
	this.studId = studId;
	this.city = city;
}
@Override
public String toString() {
	return "User [name=" + name + ", studId=" + studId + ", city=" + city + "]";
}


//private Date last_update;
//public int getActor_id() {
//	return actor_id;
//}
//public void setActor_id(int actor_id) {
//	this.actor_id = actor_id;
//}
//public String getFirst_name() {
//	return first_name;
//}
//public void setFirst_name(String first_name) {
//	this.first_name = first_name;
//}
//public String getLast_name() {
//	return last_name;
//}
//public void setLast_name(String last_name) {
//	this.last_name = last_name;
//}
//public Date getLast_update() {
//	return last_update;
//}
//public void setLast_update(Date last_update) {
//	this.last_update = last_update;
//}
//public User(int actor_id, String first_name, String last_name, Date last_update) {
//	super();
//	this.actor_id = actor_id;
//	this.first_name = first_name;
//	this.last_name = last_name;
//	this.last_update = last_update;
//}





}
