package com.acts.services;

import java.util.List;

import com.acts.entities.Route;

public interface RouteService {
	Route saveRoute(Route route);
	List<Route> getAllRoutes();
	Route findRouteById(int id);
	boolean deleteRoute(Route route);
	Route getRouteByStation(String fromStation, String toStation);
	boolean deleteById(int id);
}
