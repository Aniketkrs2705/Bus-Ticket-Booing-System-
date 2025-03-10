package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Trip;

public interface TripDao extends JpaRepository<Trip, Integer>{
	
}
