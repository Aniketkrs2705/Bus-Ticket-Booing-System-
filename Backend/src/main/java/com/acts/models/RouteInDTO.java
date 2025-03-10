package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Route;

@Component
public class RouteInDTO {
	private int routeId;
	private String fromStation;
	private String toStation;

	public RouteInDTO() {
		// TODO Auto-generated constructor stub
	}

	public RouteInDTO(String fromStation, String toStation) {
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

	@Override
	public String toString() {
		return "RouteDTO [fromStation=" + fromStation + ", toStation=" + toStation + "]";
	}
	
	public static RouteInDTO fromEntity(Route entity) {
		RouteInDTO dto = new RouteInDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}
