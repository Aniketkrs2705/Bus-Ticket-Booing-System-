package com.acts.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Trip;

@Component
public class TripResponseDTO {
	private int tripId;
	private Date date;
	private String arrivalTime;
	private String departureTime;
	private double ticketPrice;
	private String busNo;
	private String busType;
	private String fromStation;
	private String toStation;
	private int bookedSeatsCount;
	private double totalBusiness;

	public String getBusType() {
		return busType;
	}

	public void setBusType(String busType) {
		this.busType = busType;
	}

	public TripResponseDTO() {

	}

	public TripResponseDTO(int tripId, Date date, String arrivalTime, String departureTime, double ticketPrice,
			String busno, String fromStation, String toStation) {
		super();
		this.tripId = tripId;
		this.date = date;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.ticketPrice = ticketPrice;
		this.busNo = busno;
		this.fromStation = fromStation;
		this.toStation = toStation;
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
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
		return busNo;
	}

	public void setBusno(String busno) {
		this.busNo = busno;
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

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public int getBookedSeatsCount() {
		return bookedSeatsCount;
	}

	public void setBookedSeatsCount(int bookedSeatsCount) {
		this.bookedSeatsCount = bookedSeatsCount;
	}

	public double getTotalBusiness() {
		return totalBusiness;
	}

	public void setTotalBusiness(double d) {
		this.totalBusiness = d;
	}

	@Override
	public String toString() {
		return "TripDto [tripId=" + tripId + ", date=" + date + ", arrivalTime=" + arrivalTime + ", departureTime="
				+ departureTime + ", ticketPrice=" + ticketPrice + ", busno=" + busNo + ", busType=" + busType
				+ ", fromStation=" + fromStation + ", toStation=" + toStation + "]";
	}

	public static TripResponseDTO fromEntity(Trip trip) {
		TripResponseDTO dto = new TripResponseDTO();
		BeanUtils.copyProperties(trip, dto);
		return dto;
	}

}
