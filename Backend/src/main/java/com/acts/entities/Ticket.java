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
@Table(name = "ticket")
public class Ticket {
	private String pickingPoint;
	private String droppingPoint;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "ticketId")
	private int ticketId;

	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name = "userId")
	private User user;

	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name = "tripId")
	private Trip trip;
	
	@OneToMany(mappedBy = "ticket",cascade = CascadeType.MERGE)
	private List<Seat> seatList;

	public Ticket() {
		// TODO Auto-generated constructor stub
	}

	public Ticket(String pickingPoint, String droppingPoint, int ticketId, User user, Trip trip, List<Seat> seatList) {
		this.pickingPoint = pickingPoint;
		this.droppingPoint = droppingPoint;
		this.ticketId = ticketId;
		this.user = user;
		this.trip = trip;
		this.seatList = seatList;
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

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

	public List<Seat> getSeatList() {
		return seatList;
	}

	public void setSeatList(List<Seat> seatList) {
		this.seatList = seatList;
	}

	@Override
	public String toString() {
		return "Ticket [pickingPoint=" + pickingPoint + ", droppingPoint=" + droppingPoint + "]";
	}
}
