package com.acts.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.RouteDao;
import com.acts.entities.Route;

@Transactional
@Service
public class RouteServiceImpl implements RouteService {
	@Autowired
	private RouteDao routeDao;

	@Override
	public Route saveRoute(Route route) {
		Route newRoute = routeDao.save(route);
		return newRoute;
	}

	@Override
	public List<Route> getAllRoutes() {
		List<Route> list = routeDao.findAll();
		return list;
	}

	@Override
	public Route findRouteById(int id) {
		 Optional<Route> route = routeDao.findById(id);
		return route.orElse(null);
	}

	@Override
	public boolean deleteRoute(Route route) {
		if(route != null) {
			routeDao.delete(route);
			return true;
		}
		return false;
	}

	@Override
	public Route getRouteByStation(String fromStation, String toStation) {
		List<Route> list = routeDao.findAll();
		if(list != null) {
			for(Route route : list) {
				if(route.getFromStation().equals(fromStation) && route.getToStation().equals(toStation)) {
					return route;
				}
			}
		}
		return null;
	}
	
	@Override
	public boolean deleteById(int id) {
		if (routeDao.existsById(id)) {
			routeDao.deleteById(id);
			return true;
		}
		return false;
	}
}
