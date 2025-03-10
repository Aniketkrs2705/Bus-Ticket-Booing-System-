package com.acts.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.StationDao;
import com.acts.entities.Station;

@Transactional
@Service
public class StationServiceImpl implements StationService {
	@Autowired
	private StationDao stationDao;

	@Override
	public List<Station> findAllStation() {
		List<Station> stations = stationDao.findAll();
		return stations;
	}

	@Override
	public Station saveStation(Station station) {
		return stationDao.save(station);
	}

	@Override
	public List<Station> findStationAll() {
		return stationDao.findAll();
	}

	@Override
	public boolean deleteById(int id) {
		if (stationDao.existsById(id)) {
			stationDao.deleteById(id);
			return true;
		}
		return false;
	}
	
	@Override
	public List<String> findAll() {
		List<String> list= new ArrayList<String>();
		List<Station> stations= stationDao.findAll();
		if(stations!=null) {
			for(Station station : stations) {
				list.add(station.getName());
			}
		}
		return list;
	}
}
