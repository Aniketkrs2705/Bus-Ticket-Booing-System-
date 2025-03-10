package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Route;

public interface RouteDao extends JpaRepository<Route, Integer>{
	
}
