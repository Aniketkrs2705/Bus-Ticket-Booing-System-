package com.acts.services;

import java.util.List;

import com.acts.entities.Station;

public interface StationService {
	List<Station> findAllStation();
	Station saveStation(Station station);
	List<Station> findStationAll();
	boolean deleteById(int id);
	List<String> findAll();
}
