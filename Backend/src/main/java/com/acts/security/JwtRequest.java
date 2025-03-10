package com.acts.security;

public class JwtRequest {
    private String password;
    private String email;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public JwtRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JwtRequest(String password, String email) {
		super();
		this.password = password;
		this.email = email;
	}
    
    
    
}