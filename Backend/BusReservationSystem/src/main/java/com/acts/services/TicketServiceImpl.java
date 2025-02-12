package com.acts.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.TicketDao;
import com.acts.entities.Ticket;

@Transactional
@Service
public class TicketServiceImpl implements TicketService {
	@Autowired
	private TicketDao ticketDao;

	@Override
	public List<Ticket> findAllBookings(int id) {
		List<Ticket> list = ticketDao.findAll();
		List<Ticket> tickets = new ArrayList<Ticket>();

		for (Ticket ticket : list) {
			if (ticket.getUser().getUserId() == id) {
				tickets.add(ticket);
			}
		}
		return tickets;
	}

	@Override
	public Ticket saveDetails(Ticket details) {
		return ticketDao.save(details);
	}
}
