package com.acts.models;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.acts.entities.Bus;

@Component
public class BusDTO {
	private int busId;
	private String busNo;
	private String type;
	private String model;
	private int agencyId;

	public BusDTO() {

	}

	public BusDTO(int busId, String busNo, String type, String model, int agencyId) {
		super();
		this.busId = busId;
		this.busNo = busNo;
		this.type = type;
		this.model = model;
		this.agencyId = agencyId;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getAgencyId() {
		return agencyId;
	}

	public void setAgencyId(int agencyId) {
		this.agencyId = agencyId;
	}

	public int getBusId() {
		return busId;
	}

	public void setBusId(int busId) {
		this.busId = busId;
	}

	@Override
	public String toString() {
		return "BusDTO [busId=" + busId + ", busNo=" + busNo + ", type=" + type + ", model=" + model + ", agencyId="
				+ agencyId + "]";
	}

	public static BusDTO fromEntity(Bus bus) {
		BusDTO dto = new BusDTO();
		BeanUtils.copyProperties(bus, dto);
		return dto;
	}

}
