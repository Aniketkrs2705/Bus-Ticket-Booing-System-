package com.acts.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "station")
public class Station {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "stationId")
	private int stationId;
	@Column(name = "name")
	private String name;
	@Column(name = "city")
	private String city;

	public Station() {
		// TODO Auto-generated constructor stub
	}

	public Station(int stationId, String name, String city, Admin admin, Trip trip) {
		this.stationId = stationId;
		this.name = name;
		this.city = city;
	}

	public int getStationId() {
		return stationId;
	}

	public void setStationId(int stationId) {
		this.stationId = stationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Station [stationId=" + stationId + ", name=" + name + ", city=" + city + "]";
	}

}
