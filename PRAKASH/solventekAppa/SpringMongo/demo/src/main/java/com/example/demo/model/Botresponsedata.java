package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "botresponsedata")
public class Botresponsedata {

	@Id
	private Long id;
	private Long dmid;
	private Long projectId;
	private String docname;
	private String createddate;
	private List<DataModals> dataModals;
	private boolean flag=false;

	

	public boolean isFlag() {
		return flag;
	}



	public void setFlag(boolean flag) {
		this.flag = flag;
	}



	public Botresponsedata() {
		super();
	}

	

	public Botresponsedata(Long id, Long dmid, Long projectId, String docname, List<DataModals> dataModals,
			String createddate,boolean flag) {
		super();
		this.id = id;
		this.dmid = dmid;
		this.projectId = projectId;
		this.docname = docname;
		this.dataModals = dataModals;
		this.createddate = createddate;
		this.flag = flag;
	}



	@Override
	public String toString() {
		return "Botresponsedata [id=" + id + ", dmid=" + dmid + ", projectId=" + projectId + ", docname=" + docname
				+ ", dataModals=" + dataModals + ", createddate=" + createddate + ",flag=" + flag + "]";
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDmid() {
		return dmid;
	}

	public void setDmid(Long dmid) {
		this.dmid = dmid;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getDocname() {
		return docname;
	}

	public void setDocname(String docname) {
		this.docname = docname;
	}

	public List<DataModals> getDataModals() {
		return dataModals;
	}

	public void setDataModals(List<DataModals> dataModals) {
		this.dataModals = dataModals;
	}



	public String getCreateddate() {
		return createddate;
	}



	public void setCreateddate(String createddate) {
		this.createddate = createddate;
	}

}
