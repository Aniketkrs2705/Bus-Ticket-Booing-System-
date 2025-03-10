package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Route;

@Component
public class RouteDTO {
	private String fromStation;
	private String toStation;
	private String date;

	public RouteDTO() {
		// TODO Auto-generated constructor stub
	}

	public RouteDTO(String fromStation, String toStation, String date) {
		this.fromStation = fromStation;
		this.toStation = toStation;
		this.date = date;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "RouteDTO [fromStation=" + fromStation + ", toStation=" + toStation + ", date=" + date + "]";
	}
	
	public static RouteDTO fromEntity(Route entity) {
		RouteDTO dto = new RouteDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}
