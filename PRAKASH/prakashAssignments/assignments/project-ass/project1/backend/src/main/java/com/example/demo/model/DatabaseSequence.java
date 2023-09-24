package com.example.demo.model;

import org.springframework.data.annotation.Id;

public class DatabaseSequence {

	@Id
	public String id;
	private Long seq;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Long getSeq() {
		return seq;
	}
	public void setSeq(Long seq) {
		this.seq = seq;
	}
	@Override
	public String toString() {
		return "DatabaseSequence [id=" + id + ", seq=" + seq + "]";
	}
	public DatabaseSequence(String id, Long seq) {
		super();
		this.id = id;
		this.seq = seq;
	}
	public DatabaseSequence() {
		super();
	}


}
