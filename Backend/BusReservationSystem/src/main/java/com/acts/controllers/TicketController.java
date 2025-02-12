package com.acts.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.entities.Ticket;
import com.acts.models.Response;
import com.acts.models.TicketDTO;
import com.acts.services.TicketService;

@CrossOrigin
@RequestMapping("/ticket")
@RestController
public class TicketController {
	@Autowired
	private TicketService ticketService;

	@GetMapping("/bookings/{id}")
	public ResponseEntity<?> bookings(@PathVariable int id) {
		List<Ticket> list = ticketService.findAllBookings(id);
		List<TicketDTO> newList = new ArrayList<>();
		if (list != null) {
			for (Ticket ticket : list) {
				TicketDTO dto = TicketDTO.fromEntity(ticket);
				dto.setBusNo(ticket.getTrip().getBus().getBusNo());
				dto.setFromStation(ticket.getTrip().getFromStation());
				dto.setToStation(ticket.getTrip().getToStation());
				dto.setDate(ticket.getTrip().getDate());
				dto.setTicketPrice(ticket.getTrip().getTicketPrice());
				newList.add(dto);
			}
			return Response.success(newList);
		}
		return Response.error("Tickets not found!");
	}
}
