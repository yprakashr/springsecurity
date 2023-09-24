package com.example.demo.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "formField")
public class FormField {

private String	fieldName;
private String type;
private String description;
private List<Object> object;
public FormField(String fieldName, String type, String description, List<Object> object) {
	super();
	this.fieldName = fieldName;
	this.type = type;
	this.description = description;
	this.object = object;
}
public FormField() {
	super();
	// TODO Auto-generated constructor stub
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
@Override
public String toString() {
	return "FormField [fieldName=" + fieldName + ", type=" + type + ", description=" + description + ", object="
			+ object + "]";
}
	
	
}
