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
@Table(name="pickingPoint")
public class PickingPoint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pickingPointId")
	private int pickingPointId;
	@Column(name="name")
	private String name;
	
	@ManyToOne
	@JoinColumn(name="routeId")
	private Route route;
	
	public PickingPoint() {
		// TODO Auto-generated constructor stub
	}

	public PickingPoint(int pickingPointId, String name, Route route) {
		this.pickingPointId = pickingPointId;
		this.name = name;
		this.route = route;
	}

	public PickingPoint(String name) {
		this.name=name;
	}

	public int getPickingPointId() {
		return pickingPointId;
	}

	public void setPickingPointId(int pickingPointId) {
		this.pickingPointId = pickingPointId;
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
		return "PickingPoint [pickingPointId=" + pickingPointId + ", name=" + name + ", route=" + route + "]";
	}
}
