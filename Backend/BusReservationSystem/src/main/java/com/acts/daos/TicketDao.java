package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Ticket;

public interface TicketDao extends JpaRepository<Ticket, Integer>{
	
}
