package com.acts.entities;

import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "trip")
public class Trip {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "tripId")
	private int tripId;
	@Temporal(TemporalType.DATE)
	@Column(name = "date")
	private Date date;
	@Column(name = "arrivalTime")
	private String arrivalTime;
	@Column(name = "departureTime")
	private String departureTime;
	@Column(name = "ticketPrice")
	private double ticketPrice;
	@Column(name = "fromStation")
	private String fromStation;
	@Column(name = "toStation")
	private String toStation;

	@ManyToOne
	@JoinColumn(name = "agencyId")
	private Agency agency;

	@ManyToOne
	@JoinColumn(name = "busId")
	private Bus bus;

	@OneToMany(mappedBy = "trip", fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	private List<Ticket> ticketList;

	@OneToMany(mappedBy = "trip",cascade = CascadeType.MERGE)
	private List<Seat> seatList;

	public Trip() {
		// TODO Auto-generated constructor stub
	}

	public Trip(int tripId, Date date, String arrivalTime, String departureTime, double ticketPrice, String fromStation,
			String toStation, Agency agency, Bus bus, List<Ticket> ticketList) {
		super();
		this.tripId = tripId;
		this.date = date;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.ticketPrice = ticketPrice;
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.agency = agency;
		this.bus = bus;
		this.ticketList = ticketList;
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

	public Agency getAgency() {
		return agency;
	}

	public void setAgency(Agency agency) {
		this.agency = agency;
	}

	public Bus getBus() {
		return bus;
	}

	public void setBus(Bus bus) {
		this.bus = bus;
	}

	public List<Ticket> getTicketList() {
		return ticketList;
	}

	public void setTicketList(List<Ticket> ticketList) {
		this.ticketList = ticketList;
	}

	public List<Seat> getSeatList() {
		return seatList;
	}

	public void setSeatList(List<Seat> seatList) {
		this.seatList = seatList;
	}

	@Override
	public String toString() {
		return "Trip [tripId=" + tripId + ", date=" + date + ", arrivalTime=" + arrivalTime + ", departureTime="
				+ departureTime + ", ticketPrice=" + ticketPrice + ", fromStation=" + fromStation + ", toStation="
				+ toStation + "]";
	}
}
