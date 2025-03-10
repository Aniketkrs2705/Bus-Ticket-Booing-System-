package com.acts.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.entities.Seat;
import com.acts.entities.Ticket;
import com.acts.entities.Trip;
import com.acts.entities.User;
import com.acts.models.PaymentDTO;
import com.acts.models.Response;
import com.acts.models.TicketDTO;
import com.acts.services.TicketService;
import com.acts.services.TripService;
import com.acts.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/payment")
public class PaymentController {
	@Autowired
	private TicketService ticketService;
	@Autowired
	private UserService userService;
	@Autowired
	private TripService tripService;
	
	@PostMapping("/details")
	public ResponseEntity<?> details(PaymentDTO dto){
		System.out.println(dto);
		TicketDTO tdto = new TicketDTO();
		List<Seat> list = new ArrayList<Seat>();
		List<Integer> sNo = new ArrayList<>();
		Ticket details = new Ticket();
		User user = userService.findUserById(dto.getUserId());
		Trip trip = tripService.findTripById(dto.getTripId());
		if(user != null)
			details.setUser(user);
		if(trip != null)
			details.setTrip(trip);
		String[] seats = dto.getSeatNumber();
		for (String seat : seats) {
			int seatNo = Integer.parseInt(seat);
			Seat s = new Seat();
			s.setSeatNo(seatNo);
			s.setBooked(1);
			s.setTicket(details);
			s.setTrip(trip);
			list.add(s);
			sNo.add(s.getSeatNo());
		}
		details.setPickingPoint(dto.getPickingPoint());
		details.setDroppingPoint(dto.getDroppingPoint());
		details.setSeatList(list);
		Ticket ticket = ticketService.saveDetails(details);
		
		
		tdto.setName(user.getFirstName() + " " + user.getLastName());
		tdto.setPickingPoint(dto.getPickingPoint());
		tdto.setDroppingPoint(dto.getDroppingPoint());
		tdto.setBusNo(trip.getBus().getBusNo());
		tdto.setDate(trip.getDate());
		tdto.setFromStation(trip.getFromStation());
		tdto.setToStation(trip.getToStation());
		tdto.setTicketId(ticket.getTicketId());
		tdto.setTicketPrice(trip.getTicketPrice());
		tdto.setSeatNo(sNo);
	
		if(tdto != null)
				return Response.success(tdto);
		return Response.error("Payment Failed!");
	}
}
