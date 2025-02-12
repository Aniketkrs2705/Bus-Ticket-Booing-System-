package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Station;

@Component
public class StationDTO {
	private int stationId;
	private String name;
	private String city;

	public StationDTO() {
		// TODO Auto-generated constructor stub
	}

	public StationDTO(int stationId, String name, String city) {
		this.stationId = stationId;
		this.name = name;
		this.city = city;
	}

	public int getStationId() {
		return stationId;
	}

	public void setStationId(int stationId) {
		this.stationId = stationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "StationDTO [stationId=" + stationId + ", name=" + name + ", city=" + city
				+ "]";
	}

	public static StationDTO fromEntity(Station entity) {
		StationDTO dto = new StationDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	
	public static Station toEntity(StationDTO dto) {
		Station entity = new Station();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
}
