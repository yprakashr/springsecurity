package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "datadictionary")
public class Datadictionary {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
    @Id
    private Long ddid;
    private String dictionaryname;
    private Long projectId;
    private List<FormField> formFields;

	
	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public Long getDdid() {
		return ddid;
	}

	public void setDdid(Long ddid) {
		this.ddid = ddid;
	}

	public Datadictionary() {
		super();
	}


	public List<FormField> getFormFields() {
		return formFields;
	}

	
	public void setFormFields(List<FormField> formFields) {
		this.formFields = formFields;
	}

	
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}

	public String getDictionaryname() {
		return dictionaryname;
	}

	public void setDictionaryname(String dictionaryname) {
		this.dictionaryname = dictionaryname;
	}

	public Datadictionary(Long ddid, String dictionaryname, Long projectId, List<FormField> formFields) {
		super();
		this.ddid = ddid;
		this.dictionaryname = dictionaryname;
		this.projectId = projectId;
		this.formFields = formFields;
	}

	@Override
	public String toString() {
		return "Datadictionary [ddid=" + ddid + ", dictionaryname=" + dictionaryname + ", projectId=" + projectId
				+ ", formFields=" + formFields + "]";
	}


	


   
}
