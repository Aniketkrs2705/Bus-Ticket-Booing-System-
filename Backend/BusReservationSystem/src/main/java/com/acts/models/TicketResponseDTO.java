package com.acts.models;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Ticket;

@Component
public class TicketResponseDTO {
	private int ticketId;
	private int userId;
	private String name;
	private String pickingPoint;
	private String droppingPoint;
	private List<Integer> seatNo;
	private double totalTicketPrice;

	public TicketResponseDTO() {
		// TODO Auto-generated constructor stub
	}



	public TicketResponseDTO(int ticketId, int userId, String name, String pickingPoint, String droppingPoint,
			List<Integer> seatNo, double totalTicketPrice) {
		super();
		this.ticketId = ticketId;
		this.userId = userId;
		this.name = name;
		this.pickingPoint = pickingPoint;
		this.droppingPoint = droppingPoint;
		this.seatNo = seatNo;
		this.totalTicketPrice = totalTicketPrice;
	}



	public int getTicketId() {
		return ticketId;
	}



	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}



	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
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



	public List<Integer> getSeatNo() {
		return seatNo;
	}



	public void setSeatNo(List<Integer> seatNo) {
		this.seatNo = seatNo;
	}



	public double getTotalTicketPrice() {
		return totalTicketPrice;
	}



	public void setTotalTicketPrice(double totalTicketPrice) {
		this.totalTicketPrice = totalTicketPrice;
	}



	@Override
	public String toString() {
		return "TicketResponseDTO [ticketId=" + ticketId + ", userId=" + userId + ", name=" + name + ", pickingPoint="
				+ pickingPoint + ", droppingPoint=" + droppingPoint + ", seatNo=" + seatNo + ", totalTicketPrice="
				+ totalTicketPrice + "]";
	}



	public static TicketResponseDTO fromEntity(Ticket entity) {
		TicketResponseDTO dto = new TicketResponseDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}
