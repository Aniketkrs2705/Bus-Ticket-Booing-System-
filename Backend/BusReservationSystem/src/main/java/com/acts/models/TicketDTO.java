package com.acts.models;

import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Ticket;

@Component
public class TicketDTO {
	private int ticketId;
	private String name;
	private String pickingPoint;
	private String droppingPoint;
	private String busNo;
	private String fromStation;
	private String toStation;
	private Date date;
	private double ticketPrice;
	private List<Integer> seatNo;

	public TicketDTO() {
		// TODO Auto-generated constructor stub
	}

	public TicketDTO(int ticketId, String name, String pickingPoint, String droppingPoint, String busNo,
			String fromStation, String toStation, Date date, double ticketPrice, List<Integer> seatNo) {
		this.ticketId = ticketId;
		this.name = name;
		this.pickingPoint = pickingPoint;
		this.droppingPoint = droppingPoint;
		this.busNo = busNo;
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.date = date;
		this.ticketPrice = ticketPrice;
		this.seatNo = seatNo;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
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

	public List<Integer> getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(List<Integer> seatNo) {
		this.seatNo = seatNo;
	}

	@Override
	public String toString() {
		return "TicketDTO [ticketId=" + ticketId + ", name=" + name + ", pickingPoint=" + pickingPoint
				+ ", droppingPoint=" + droppingPoint + ", busNo=" + busNo + ", fromStation=" + fromStation
				+ ", toStation=" + toStation + ", date=" + date + ", ticketPrice=" + ticketPrice + ", seatNo=" + seatNo
				+ "]";
	}

	public static TicketDTO fromEntity(Ticket entity) {
		TicketDTO dto = new TicketDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}
