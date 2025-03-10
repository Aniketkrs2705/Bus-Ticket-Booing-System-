package com.acts.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "route")
public class Route {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "routeId")
	private int routeId;
	@Column(name = "fromStation")
	private String fromStation;
	@Column(name = "toStation")
	private String toStation;

	@OneToMany(mappedBy = "route",cascade = CascadeType.MERGE)
	private List<PickingPoint> pickingPoint;

	@OneToMany(mappedBy = "route",cascade = CascadeType.MERGE)
	private List<DroppingPoint> droppingPoint;

	public Route() {
		// TODO Auto-generated constructor stub
	}

	public Route(int routeId, String fromStation, String toStation, List<PickingPoint> pickingPoint,
			List<DroppingPoint> droppingPoint) {
		this.routeId = routeId;
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.pickingPoint = pickingPoint;
		this.droppingPoint = droppingPoint;
	}

	public Route(String fromStation, String toStation) {
		this.fromStation = fromStation;
		this.toStation = toStation;
	}

	public int getRouteId() {
		return routeId;
	}

	public void setRouteId(int routeId) {
		this.routeId = routeId;
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

	public List<PickingPoint> getPickingPoint() {
		return pickingPoint;
	}

	public void setPickingPoint(List<PickingPoint> pickingPoint) {
		this.pickingPoint = pickingPoint;
	}

	public List<DroppingPoint> getDroppingPoint() {
		return droppingPoint;
	}

	public void setDroppingPoint(List<DroppingPoint> droppingPoint) {
		this.droppingPoint = droppingPoint;
	}

	@Override
	public String toString() {
		return "Route [routeId=" + routeId + ", fromStation=" + fromStation + ", toStation=" + toStation + "]";
	}
}
