package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST)
public class APIException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6677461240978131271L;

	public APIException(String message) {
		super(message);
	}

	
	
}
