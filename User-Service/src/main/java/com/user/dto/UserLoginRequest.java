package com.user.dto;

public class UserLoginRequest {
	
	String email;
	String password;
	public UserLoginRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public UserLoginRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
}
