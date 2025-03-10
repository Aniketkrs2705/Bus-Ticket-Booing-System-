package com.acts.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "seat")
public class Seat {
	private int seatNo;
	private int booked;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "seatId")
	private int seatId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "tripId")
	private Trip trip;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ticketId")
	private Ticket ticket;

	public Seat() {
		// TODO Auto-generated constructor stub
	}

	public Seat(int seatNo, int booked, int seatId, Trip trip, Ticket ticket) {
		this.seatNo = seatNo;
		this.booked = booked;
		this.seatId = seatId;
		this.trip = trip;
		this.ticket = ticket;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public int isBooked() {
		return booked;
	}

	public void setBooked(int booked) {
		this.booked = booked;
	}

	public int getSeatId() {
		return seatId;
	}

	public void setSeatId(int seatId) {
		this.seatId = seatId;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}

	@Override
	public String toString() {
		return "Seat [seatNo=" + seatNo + ", booked=" + booked + ", seatId=" + seatId + ", trip=" + trip + ", ticket="
				+ ticket + "]";
	}

}
//PaymentDTO [seatNumber=[1, 2, 3], pickingPoint=Amol, droppingPoint=Ghare, tripId=2, userId=1]
