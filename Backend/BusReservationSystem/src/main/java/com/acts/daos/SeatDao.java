package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Seat;

public interface SeatDao extends JpaRepository<Seat, Integer>{

}
