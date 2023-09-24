package com.example.demo.exception;

public class TaskNotFound extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1868469308347157455L;

	public TaskNotFound(String message) {
		super(message);
	}


}
