package com.acts.services;

import java.util.List;

import com.acts.entities.Ticket;

public interface TicketService {
	List<Ticket> findAllBookings(int id);
	Ticket saveDetails(Ticket details);
}
