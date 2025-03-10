package com.acts.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Trip;

@Component
public class TripDTO {
	private int tripId;
	private String name;
	private String busNo;
	private String busType;
	private String fromStation;
	private String toStation;
	private String arrivalTime;
	private String departureTime;
	private Date date;
	private double ticketPrice;

	public TripDTO() {
		// TODO Auto-generated constructor stub
	}

	public TripDTO(int tripId, String name, String busNo, String busType, String fromStation, String toStation,
			String arrivalTime, String departureTime, Date date, double ticketPrice) {
		this.tripId = tripId;
		this.name = name;
		this.busNo = busNo;
		this.busType = busType;
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.date = date;
		this.ticketPrice = ticketPrice;
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public String getBusType() {
		return busType;
	}

	public void setBusType(String busType) {
		this.busType = busType;
	}

	public String getFromStation() {
		return fromStation;
	}

	public void setFromStation(String fromStation) {
		this.fromStation = fromStation;
	}

	public String getToStation() {
		return toStation;
	}

	public void setToStation(String toStation) {
		this.toStation = toStation;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	@Override
	public String toString() {
		return "TripDTO [tripId=" + tripId + ", name=" + name + ", busNo=" + busNo + ", busType=" + busType
				+ ", fromStation=" + fromStation + ", toStation=" + toStation + ", arrivalTime=" + arrivalTime
				+ ", departureTime=" + departureTime + ", date=" + date + ", ticketPrice=" + ticketPrice + "]";
	}

	public static TripDTO fromEntity(Trip trip) {
		TripDTO dto= new TripDTO();
		BeanUtils.copyProperties(trip, dto);
		return dto;
	}
}
