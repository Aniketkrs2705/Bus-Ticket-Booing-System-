package com.acts.models;

import org.springframework.stereotype.Component;

@Component
public class EditTripDTO {
	private int tripId;
	private String date;
	private String arrivalTime;
	private String departureTime;
	private double ticketPrice;
	private String busno;
	private String busType;
	private String fromStation;
	private String toStation;
	private int agencyId;

	public String getBusType() {
		return busType;
	}

	public void setBusType(String busType) {
		this.busType = busType;
	}

	public EditTripDTO() {
		// TODO Auto-generated constructor stub
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public String getBusno() {
		return busno;
	}

	public void setBusno(String busno) {
		this.busno = busno;
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

	public int getAgencyId() {
		return agencyId;
	}

	public void setAgencyId(int agencyId) {
		this.agencyId = agencyId;
	}

	public EditTripDTO(int tripId, String date, String arrivalTime, String departureTime, double ticketPrice,
			String busno, String busType, String fromStation, String toStation, int agencyId) {
		super();
		this.tripId = tripId;
		this.date = date;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.ticketPrice = ticketPrice;
		this.busno = busno;
		this.busType = busType;
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.agencyId = agencyId;
	}

	@Override
	public String toString() {
		return "TripDto [tripId=" + tripId + ", date=" + date + ", arrivalTime=" + arrivalTime + ", departureTime="
				+ departureTime + ", ticketPrice=" + ticketPrice + ", busno=" + busno + ", busType=" + busType
				+ ", fromStation=" + fromStation + ", toStation=" + toStation + "]";
	}
}
