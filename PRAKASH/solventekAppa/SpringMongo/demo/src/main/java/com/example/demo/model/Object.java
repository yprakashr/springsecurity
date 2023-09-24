package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "object")
public class Object {
private String key;
private String types;
private String desc;
private String value;
private String updated_value;


public Object(String key, String types, String desc, String value, String updated_value) {
	super();
	this.key = key;
	this.types = types;
	this.desc = desc;
	this.value = value;
	this.updated_value = updated_value;
}



@Override
public String toString() {
	return "Object [key=" + key + ", types=" + types + ", desc=" + desc + ", value=" + value + ", updated_value="
			+ updated_value + "]";
}



public String getKey() {
	return key;
}
public void setKey(String key) {
	this.key = key;
}

public String getTypes() {
	return types;
}
public void setTypes(String types) {
	this.types = types;
}
public String getDesc() {
	return desc;
}
public void setDesc(String desc) {
	this.desc = desc;
}

public Object() {
	super();
}

public String getValue() {
	return value;
}
public void setValue(String value) {
	this.value = value;
}
public String getUpdated_value() {
	return updated_value;
}
public void setUpdated_value(String updated_value) {
	this.updated_value = updated_value;
}



}
