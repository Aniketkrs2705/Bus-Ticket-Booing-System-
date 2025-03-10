package com.acts.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="droppingPoint")
public class DroppingPoint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="droppingPointId")
	private int droppingPointId;
	@Column(name="name")
	private String name;
	
	@ManyToOne
	@JoinColumn(name="routeId")
	private Route route;
	
	public DroppingPoint() {
		// TODO Auto-generated constructor stub
	}

	public DroppingPoint(int droppingPointId, String name, Route route) {
		this.droppingPointId = droppingPointId;
		this.name = name;
		this.route = route;
	}

	public DroppingPoint(String name) {
		this.name = name;
	}

	public int getDroppingPointId() {
		return droppingPointId;
	}

	public void setDroppingPointId(int droppingPointId) {
		this.droppingPointId = droppingPointId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Route getRoute() {
		return route;
	}

	public void setRoute(Route route) {
		this.route = route;
	}

	@Override
	public String toString() {
		return "DroppingPoint [droppingPointId=" + droppingPointId + ", name=" + name + ", route=" + route + "]";
	}
}
