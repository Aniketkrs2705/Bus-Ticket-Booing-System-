package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Agency;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Component
public class AgencyDTO {
	private int agencyId;
	private String name;
	private String ownerName;
	private String email;
	@JsonIgnore
	private String password;
	private String mobileNo;
	private String address;

	public AgencyDTO() {
		// TODO Auto-generated constructor stub
	}

	public AgencyDTO(int agencyId, String name, String ownerName, String email, String password, String address) {
		this.agencyId = agencyId;
		this.name = name;
		this.ownerName = ownerName;
		this.email = email;
		this.password = password;
		this.address = address;
	}

	public int getAgencyId() {
		return agencyId;
	}

	public void setAgencyId(int agencyId) {
		this.agencyId = agencyId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
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
		return "AgencyDTO [agencyId=" + agencyId + ", name=" + name + ", ownerName=" + ownerName + ", email=" + email
				+ ", password=" + password + ", address=" + address + "]";
	}

	public static AgencyDTO fromEntity(Agency entity) {
		AgencyDTO dto = new AgencyDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	public static Agency toEntity(AgencyDTO dto) {
		Agency entity = new Agency();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
}
