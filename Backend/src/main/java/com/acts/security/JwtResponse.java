package com.acts.security;

public class JwtResponse {
    private String jwtToken;
    private String username;
    private String roleName;
    private int userId;  // Add userId to the response

    public JwtResponse(String jwtToken, String username, String roleName, int userId2) {
        this.jwtToken = jwtToken;
        this.username = username;
        this.roleName = roleName;
        this.userId = userId2;
    }

    // Getters and setters
    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
