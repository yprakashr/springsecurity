package com.appmodel;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "event")
public class Event {
	
	   private long workflow_id;
	   private String workflow_name;
	   private long bot_id;
	   private String bot_name;
	   private String label;
	   private String description;
	   private String start_date;
	   private String end_date;
	   private String start_time;
	   private String end_time;
	
	
   private long id;
   
   public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public long getWorkflow_id() {
	return workflow_id;
}
public void setWorkflow_id(long workflow_id) {
	this.workflow_id = workflow_id;
}
public String getWorkflow_name() {
	return workflow_name;
}
public void setWorkflow_name(String workflow_name) {
	this.workflow_name = workflow_name;
}
public long getBot_id() {
	return bot_id;
}
public void setBot_id(long bot_id) {
	this.bot_id = bot_id;
}
public String getBot_name() {
	return bot_name;
}
public void setBot_name(String bot_name) {
	this.bot_name = bot_name;
}
public String getLabel() {
	return label;
}
public void setLabel(String label) {
	this.label = label;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getStart_date() {
	return start_date;
}
public void setStart_date(String start_date) {
	this.start_date = start_date;
}
public String getEnd_date() {
	return end_date;
}
public void setEnd_date(String end_date) {
	this.end_date = end_date;
}
public String getStart_time() {
	return start_time;
}
public void setStart_time(String start_time) {
	this.start_time = start_time;
}
public String getEnd_time() {
	return end_time;
}
public void setEnd_time(String end_time) {
	this.end_time = end_time;
}
@Override
public String toString() {
	return "Event [workflow_id=" + workflow_id + ", workflow_name=" + workflow_name + ", bot_id=" + bot_id
			+ ", bot_name=" + bot_name + ", label=" + label + ", description=" + description + ", start_date="
			+ start_date + ", end_date=" + end_date + ", start_time=" + start_time + ", end_time=" + end_time + ", id="
			+ id + "]";
}
public Event() {
	super();
}


public Event(long workflow_id, String workflow_name, long bot_id, String bot_name, String label, String description,
		String start_date, String end_date, String start_time, String end_time, long id) {
	super();
	this.workflow_id = workflow_id;
	this.workflow_name = workflow_name;
	this.bot_id = bot_id;
	this.bot_name = bot_name;
	this.label = label;
	this.description = description;
	this.start_date = start_date;
	this.end_date = end_date;
	this.start_time = start_time;
	this.end_time = end_time;
	this.id = id;
}
}
