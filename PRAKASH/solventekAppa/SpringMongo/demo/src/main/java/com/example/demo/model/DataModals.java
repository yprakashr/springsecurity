package com.example.demo.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "dataModals")
public class DataModals {

private String fieldName;
private String type;
private String description;
private String value;
private List<Object> object;
private String updated_value;



public DataModals(String fieldName, String type, String description, String value, List<Object> object,
		String updated_value) {
	super();
	this.fieldName = fieldName;
	this.type = type;
	this.description = description;
	this.value = value;
	this.object = object;
	this.updated_value = updated_value;
}

@Override
public String toString() {
	return "DataModals [fieldName=" + fieldName + ", type=" + type + ", description=" + description + ", value=" + value
			+ ", object=" + object + ", updated_value=" + updated_value + "]";
}

public String getUpdated_value() {
	return updated_value;
}

public void setUpdated_value(String updated_value) {
	this.updated_value = updated_value;
}



public DataModals() {
	super();
}

public String getFieldName() {
	return fieldName;
}

public void setFieldName(String fieldName) {
	this.fieldName = fieldName;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public List<Object> getObject() {
	return object;
}
public void setObject(List<Object> object) {
	this.object = object;
}

public String getValue() {
	return value;
}

public void setValue(String value) {
	this.value = value;
}

	
	
}
