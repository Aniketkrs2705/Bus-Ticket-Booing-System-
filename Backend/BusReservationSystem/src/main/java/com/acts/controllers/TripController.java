package com.acts.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.entities.Seat;
import com.acts.entities.Ticket;
import com.acts.entities.Trip;
import com.acts.models.EditTripDTO;
import com.acts.models.Response;
import com.acts.models.RouteDTO;
import com.acts.models.TicketResponseDTO;
import com.acts.models.TripDTO;
import com.acts.services.TripService;

@CrossOrigin
@RestController
@RequestMapping("/trip")
public class TripController {
	@Autowired
	private TripService tripService;

	@PostMapping("/buses")
	public ResponseEntity<?> getTrip(RouteDTO route) {
		List<Trip> list = tripService.findByRoute(route.getFromStation(), route.getToStation(), route.getDate());
		List<TripDTO> trip = new ArrayList<>();
		if (list != null) {
			for (Trip newTrip : list) {
				TripDTO dto = TripDTO.fromEntity(newTrip);
				dto.setName(newTrip.getAgency().getName());
				dto.setBusNo(newTrip.getBus().getBusNo());
				dto.setBusType(newTrip.getBus().getType());
				trip.add(dto);
			}
			return Response.success(trip);
		}
		return Response.error("Not Available!");
	}

	@GetMapping("/getseats/{id}")
	public ResponseEntity<?> getBookedSeats(@PathVariable int id) {
		Trip trip = tripService.findTripById(id);
		List<Seat> seats = trip.getSeatList();
		List<String> seatNo = new ArrayList<>();
		for (Seat seat : seats) {
			seatNo.add(String.valueOf(seat.getSeatNo()));
		}
		if (seatNo != null)
			return Response.success(seatNo);
		return Response.error("Not Found!");
	}
	

	@DeleteMapping("/deleteTrip/{id}")
	public ResponseEntity<?> deleteTrip(@PathVariable int id) {
		boolean isDeleted = false;
		Trip trip = tripService.findById(id);
		if (trip != null)
			isDeleted = tripService.deleteTrip(trip);

		if (isDeleted)
			return Response.success("trip Is Deleted Successfully");
		return Response.error("trip is not found");

	}

	@PostMapping("/edit")
	public ResponseEntity<?> editTrip(EditTripDTO dto) {
		System.out.println(dto.toString());
		boolean isUpdated = tripService.update(dto.getTripId(), dto);
		if (isUpdated)
			return Response.success("Trip is Updated");

		return Response.error("trip cannot be updated");
	}


	@PostMapping("/add")
	public ResponseEntity<?> addTrip(EditTripDTO dto) {
		System.out.println(dto.toString());
		boolean isAdded = tripService.addNewTrip(dto);
		if (isAdded)
			return Response.success("Trip inserted Successfullly ");
		return Response.error("Trip is Not Inserted");

	}

	@GetMapping("/bookings/{id}")
	public ResponseEntity<?> tripBookings(@PathVariable int id) {
		Trip trip = tripService.findById(id);
		List<Ticket> list = null;
		if (trip != null)
			list = trip.getTicketList();

		List<TicketResponseDTO> newList = new ArrayList<>();

		if (list != null) {
			for (Ticket ticket : list) {
				TicketResponseDTO dto = TicketResponseDTO.fromEntity(ticket);
				List<Integer> seatNo = new ArrayList<Integer>();
				dto.setUserId(ticket.getUser().getUserId());
				dto.setName(ticket.getUser().getFirstName() + " " + ticket.getUser().getLastName());
				for (Seat s : ticket.getSeatList()) {
					seatNo.add(s.getSeatNo());
				}
				if (seatNo != null)
					dto.setSeatNo(seatNo);
				dto.setTotalTicketPrice(seatNo.size() * trip.getTicketPrice());
				newList.add(dto);
			}
			return Response.success(newList);
		}
		return Response.error("Tickets not found!");
	}
}
