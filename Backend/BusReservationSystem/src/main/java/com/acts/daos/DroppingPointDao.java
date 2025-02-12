package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.DroppingPoint;

public interface DroppingPointDao extends JpaRepository<DroppingPoint, Integer>{

}
