package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;

@Component
public class UserDTO {
	@JsonProperty("id")
	private int userId;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String password;
	private String mobileNo;
	private String address;
	
	public UserDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public UserDTO(int userId, String firstName, String lastName, String gender, String email, String password,
			String mobileNo, String address) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
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

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender
				+ ", email=" + email + ", password=" + password + ", mobileNo=" + mobileNo + ", address=" + address
				+ "]";
	}

	public static User toEntity(UserDTO dto) {
		User entity = new User();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
	
	public static UserDTO fromEntity(User entity) {
		UserDTO dto = new UserDTO();
		BeanUtils.copyProperties(entity,dto);
		return dto;
	}
}
