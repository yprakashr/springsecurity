package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value =HttpStatus.NOT_FOUND)
public class UserNotFound extends RuntimeException{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2505067197108951814L;

	public UserNotFound(String message) {
		super(message);
	}
}
