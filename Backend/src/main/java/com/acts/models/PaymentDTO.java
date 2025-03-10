package com.acts.models;

import java.util.Arrays;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Ticket;

@Component
public class PaymentDTO {
	private String[] seatNumber;
	private String pickingPoint;
	private String droppingPoint;
	private int tripId;
	private int userId;
	private String busNo;
	
	public PaymentDTO() {
		// TODO Auto-generated constructor stub
	}

	public PaymentDTO(String[] seatNumber, String pickingPoint, String droppingPoint, int tripId, int userId,
			String busNo) {
		this.seatNumber = seatNumber;
		this.pickingPoint = pickingPoint;
		this.droppingPoint = droppingPoint;
		this.tripId = tripId;
		this.userId = userId;
		this.busNo = busNo;
	}

	public String[] getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(String[] seatNumber) {
		this.seatNumber = seatNumber;
	}

	public String getPickingPoint() {
		return pickingPoint;
	}

	public void setPickingPoint(String pickingPoint) {
		this.pickingPoint = pickingPoint;
	}

	public String getDroppingPoint() {
		return droppingPoint;
	}

	public void setDroppingPoint(String droppingPoint) {
		this.droppingPoint = droppingPoint;
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	@Override
	public String toString() {
		return "PaymentDTO [seatNumber=" + Arrays.toString(seatNumber) + ", pickingPoint=" + pickingPoint
				+ ", droppingPoint=" + droppingPoint + ", tripId=" + tripId + ", userId=" + userId + "]";
	}
	
	public static PaymentDTO fromEntity(Ticket entity) {
		PaymentDTO dto = new PaymentDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	
	public static Ticket toEntity(PaymentDTO dto) {
		Ticket entity = new Ticket();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
}
