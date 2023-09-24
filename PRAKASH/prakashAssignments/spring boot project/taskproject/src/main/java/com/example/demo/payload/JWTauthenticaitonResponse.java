package com.example.demo.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JWTauthenticaitonResponse {
	
private  String token;
private String tokenType="Bearer";
public JWTauthenticaitonResponse(String token) {
	super();
	this.token = token;
}
public String getToken() {
	return token;
}
public void setToken(String token) {
	this.token = token;
}
public String getTokenType() {
	return tokenType;
}
public void setTokenType(String tokenType) {
	this.tokenType = tokenType;
}

	
	
}
