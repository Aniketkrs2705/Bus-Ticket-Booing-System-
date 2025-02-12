package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.acts.entities.Seat;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {
}

