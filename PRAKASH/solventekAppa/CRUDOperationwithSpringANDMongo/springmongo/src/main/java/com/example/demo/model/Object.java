package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "object")
public class Object {
private String key;
private String text;
private String desc;
public String getKey() {
	return key;
}
public void setKey(String key) {
	this.key = key;
}
public String getText() {
	return text;
}
public void setText(String text) {
	this.text = text;
}
public String getDesc() {
	return desc;
}
public void setDesc(String desc) {
	this.desc = desc;
}
public Object(String key, String text, String desc) {
	super();
	this.key = key;
	this.text = text;
	this.desc = desc;
}
public Object() {
	super();
}
@Override
public String toString() {
	return "Object [key=" + key + ", text=" + text + ", desc=" + desc + "]";
}



}
