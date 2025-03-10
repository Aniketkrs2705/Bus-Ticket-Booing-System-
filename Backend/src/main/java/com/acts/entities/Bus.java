package com.acts.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "bus")
public class Bus {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "busId")
	private int busId;
	@Column(name = "busNo")
	private String busNo;
	@Column(name = "busType")
	private String type;
	@Column(name = "model")
	private String model;

	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name = "agencyId")
	private Agency agency;

	@OneToMany(mappedBy = "bus",cascade = CascadeType.MERGE)
	private List<Trip> tripList;

	public Bus() {
		// TODO Auto-generated constructor stub
	}

	public Bus(int busId, String busNo, String type, String model, Agency agency, List<Trip> tripList) {
		this.busId = busId;
		this.busNo = busNo;
		this.type = type;
		this.model = model;
		this.agency = agency;
		this.tripList = tripList;
	}

	public int getBusId() {
		return busId;
	}

	public void setBusId(int busId) {
		this.busId = busId;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Agency getAgency() {
		return agency;
	}

	public void setAgency(Agency agency) {
		this.agency = agency;
	}

	public List<Trip> getTripList() {
		return tripList;
	}

	public void setTripList(List<Trip> tripList) {
		this.tripList = tripList;
	}

	@Override
	public String toString() {
		return "Bus [busId=" + busId + ", busNo=" + busNo + ", type=" + type + ", model=" + model + "]";
	}
}
