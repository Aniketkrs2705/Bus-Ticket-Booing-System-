package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.PickingPoint;

public interface PickingPointDao extends JpaRepository<PickingPoint, Integer>{
	
}
