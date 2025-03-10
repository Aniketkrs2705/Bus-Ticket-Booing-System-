package com.acts.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.TripDao;
import com.acts.entities.Agency;
import com.acts.entities.Bus;
import com.acts.entities.Trip;
import com.acts.models.DateConversionDTO;
import com.acts.models.EditTripDTO;

@Transactional
@Service
public class TripServiceImpl implements TripService {
	@Autowired
	private TripDao tripDao;
	@Autowired
	private DateConversionDTO dtDto;
	@Autowired
	private BusService busService;
	@Autowired
	private AgencyService agencyService;

	
	
	@Override
	public List<Trip> findAllTrip() {
		List<Trip> list = tripDao.findAll();
		return list;
	}

	@Override
	public List<Trip> findByRoute(String fromStation, String toStation, String date) {
		List<Trip> list = this.findAllTrip();
		List<Trip> newList = new ArrayList<Trip>();

		for (Trip trip : list) {
			if (trip.getFromStation().equals(fromStation) && trip.getToStation().equals(toStation)
					&& trip.getDate().toString().equals(date)) {
				newList.add(trip);
			}
		}
		return newList;
	}

	@Override
	public Trip findTripById(int tripId) {
		Optional<Trip> trip = tripDao.findById(tripId);
		return trip.orElse(null);
	}

	@Override
	public List<Trip> findAll() {
		return tripDao.findAll();
	}

	@Override
	public Trip findById(int id) {
		Optional<Trip> trip = tripDao.findById(id);
		return trip.orElse(null);
	}

	@Override
	public boolean deleteTrip(Trip trip) {
		if (trip != null) {
			tripDao.delete(trip);
			return true;
		}
		return false;
	}

	// [tripId=2, date=2021-08-16, arrivalTime=11:00, departureTime=3:00,
	// ticketPrice=400.0, busno=MH-11BH-0888, busType=null, fromStation=satara,
	// toStation=mumbai]
	@Override
	public boolean update(int id, EditTripDTO dto) {
		Trip trip = this.findById(id);
		if (trip != null) {
			Date newDate = dtDto.dateConvert(dto.getDate());
			if (newDate != null) {
				System.out.println(newDate);
				trip.setDate(newDate);
			}
			trip.setArrivalTime(dto.getArrivalTime());
			trip.setDepartureTime(dto.getDepartureTime());
			trip.setTicketPrice(dto.getTicketPrice());

			Bus newBus = busService.findByBusNo(dto.getBusno());
			if (newBus != null) {
				trip.setBus(newBus);
			}

			trip.setFromStation(dto.getFromStation());
			trip.setToStation(dto.getToStation());
			return true;
		}
		return false;
	}

	@Override
	public boolean addNewTrip(EditTripDTO dto) {
		Trip newTrip = new Trip();
		Agency agency = agencyService.findById(dto.getAgencyId());
		Date newDate = dtDto.dateConvert(dto.getDate());
		if (newDate != null) {
			System.out.println(newDate);
			newTrip.setDate(newDate);
		}
		newTrip.setArrivalTime(dto.getArrivalTime());
		newTrip.setDepartureTime(dto.getDepartureTime());
		newTrip.setTicketPrice(dto.getTicketPrice());
		Bus newBus = busService.findByBusNo(dto.getBusno());
		if (newBus != null) {
			newTrip.setBus(newBus);
		}
		newTrip.setFromStation(dto.getFromStation());
		newTrip.setToStation(dto.getToStation());

		if (agency != null)
			newTrip.setAgency(agency);
		// System.out.println(newTrip);
		Trip trip = tripDao.save(newTrip);
		if (trip != null)
			return true;
		return false;
	}
}
