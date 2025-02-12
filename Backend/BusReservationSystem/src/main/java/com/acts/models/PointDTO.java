package com.acts.models;

public class PointDTO {
	private int id;
	private String name;
	
	public PointDTO() {
		// TODO Auto-generated constructor stub
	}

	public PointDTO(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "PointDTO [id=" + id + ", name=" + name + "]";
	}
}
