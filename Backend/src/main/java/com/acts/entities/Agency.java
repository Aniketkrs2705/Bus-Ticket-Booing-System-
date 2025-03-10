package com.acts.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "agency")
public class Agency {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "agencyId")
	private int agencyId;
	@Column(name = "name")
	private String name;
	@Column(name = "ownerName")
	private String ownerName;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name="mobileNo")
	private String mobileNo;
	@Column(name = "address")
	private String address;

	@OneToMany(mappedBy = "agency",cascade = CascadeType.MERGE)
	private List<Bus> busList;

	@OneToMany(mappedBy = "agency",cascade = CascadeType.MERGE)
	private List<Trip> tripList;

	public Agency() {
		// TODO Auto-generated constructor stub
	}

	public Agency(int agencyId, String name, String ownerName, String email, String password, String address,
			List<Bus> busList) {
		this.agencyId = agencyId;
		this.name = name;
		this.ownerName = ownerName;
		this.email = email;
		this.password = password;
		this.address = address;
		this.busList = busList;
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

	public List<Bus> getBusList() {
		return busList;
	}

	public void setBusList(List<Bus> busList) {
		this.busList = busList;
	}

	public List<Trip> getTripList() {
		return tripList;
	}

	public void setTripList(List<Trip> tripList) {
		this.tripList = tripList;
	}

	@Override
	public String toString() {
		return "Agency [agencyId=" + agencyId + ", name=" + name + ", ownerName=" + ownerName + ", email=" + email
				+ ", password=" + password + ", mobileNo=" + mobileNo + ", address=" + address + "]";
	}
}
