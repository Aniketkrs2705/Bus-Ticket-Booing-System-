package com.acts.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.entities.Agency;
import com.acts.entities.Seat;
import com.acts.entities.Trip;
import com.acts.models.AgencyDTO;
import com.acts.models.ChangePasswordDTO;
import com.acts.models.CredentialsDTO;
import com.acts.models.Response;
import com.acts.models.TripResponseDTO;
import com.acts.services.AgencyService;

@CrossOrigin
@RequestMapping("/agency")
@RestController
public class AgencyController {
	@Autowired
	private AgencyService agencyService;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public ResponseEntity<?> loginAgency(CredentialsDTO cred) {
		Agency agency = agencyService.authenticate(cred.getEmail(), cred.getPassword());
		if(agency == null)
			return Response.error("Agency not found!");
		AgencyDTO a = AgencyDTO.fromEntity(agency);
		if (a != null) {
			return Response.success(a);
		}
		return Response.error("Login Failed!");
	}

	@GetMapping("/agencylist")
	public ResponseEntity<?> findAgencyAll() {
		List<Agency> list = agencyService.findAgencyAll();
		List<AgencyDTO> result = new ArrayList<>();
		for (Agency agency : list)
			result.add(AgencyDTO.fromEntity(agency));
		return Response.success(result);
	}

	@PostMapping("/addagency")
	public ResponseEntity<?> save(AgencyDTO agencyDto) {
		Agency agency = AgencyDTO.toEntity(agencyDto);
		agency = agencyService.saveAgency(agency);
		return Response.success(agency);
	}

	@DeleteMapping("/agencylist/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
		boolean success = agencyService.deleteById(id);
		return ResponseEntity.ok(success);
	}

	@PostMapping("/agencyforgot")
	public ResponseEntity<?> changePassword(CredentialsDTO cred) {
		Agency agency = agencyService.updatePassword(cred.getEmail(), cred.getPassword());
		if (agency != null) {
			return Response.success(agency);
		}
		return Response.error(agency);
	}

	@GetMapping("/getprofile/{id}")
	public ResponseEntity<?> getProfile(@PathVariable int id) {
		Agency agency = agencyService.findById(id);
		System.out.println(agency.getPassword());
		AgencyDTO newAgency = AgencyDTO.fromEntity(agency);
		if (newAgency != null) {
			return Response.success(newAgency);
		}
		return Response.error("agency Not Found");
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable int id, AgencyDTO agency) {
		Agency newAgency = AgencyDTO.toEntity(agency);
		Agency a = agencyService.findById(id);
		a.setName(newAgency.getName());
		a.setOwnerName(newAgency.getOwnerName());
		a.setEmail(newAgency.getEmail());
		a.setMobileNo(newAgency.getMobileNo());
		a.setAddress(newAgency.getAddress());
		Agency a1 = agencyService.updateAgency(a);
		AgencyDTO dto = AgencyDTO.fromEntity(a1);
		if (dto != null)
			return Response.success(dto);
		return Response.error("Updation Failed!");
	}


	@GetMapping("/home/{id}")
	public ResponseEntity<?> agencyHome(@PathVariable int id) {
		List<Trip> trip = agencyService.findAllAgencyTrips(id);
		List<TripResponseDTO> dto = new ArrayList<>();
		for (Trip t : trip) {
			if ((t.getDate().compareTo(new Date()) == 0 || t.getDate().compareTo(new Date()) >= 0)) {
				TripResponseDTO TripDTO = TripResponseDTO.fromEntity(t);
				TripDTO.setBusNo(t.getBus().getBusNo());
				TripDTO.setBusType(t.getBus().getType());
				dto.add(TripDTO);
			}
		}
		if (dto != null)
			return Response.success(dto);
		return Response.error("Not Found");
	}

	@GetMapping("/trips/all/{id}")
	public ResponseEntity<?> getAllTrips(@PathVariable int id) {
		List<Trip> trip = agencyService.findAllAgencyTrips(id);
		List<TripResponseDTO> dto = new ArrayList();
		for (Trip t : trip) {
			TripResponseDTO TripDTO = TripResponseDTO.fromEntity(t);
			TripDTO.setBusNo(t.getBus().getBusNo());
			TripDTO.setBusType(t.getBus().getType());
			List<Seat> seats = t.getSeatList();
			int count = seats.size();
			System.out.println(count);
			TripDTO.setBookedSeatsCount(count);
			TripDTO.setTotalBusiness(count * t.getTicketPrice());
			dto.add(TripDTO);
		}
		if (dto != null)
			return Response.success(dto);
		return Response.error("Not Found");

	}

	@PostMapping("/changePassword")
	public ResponseEntity<?> changeAgencyPassword(ChangePasswordDTO dto) {
		Agency agency = agencyService.findAgencyById(dto.getId());
		if (agency == null)
			return Response.error("Agency Not Found");
		if (passwordEncoder.matches(dto.getOldPassword(), agency.getPassword())) {
			agency.setPassword(dto.getNewPassword());
			Agency newAgency = agencyService.save(agency);
			if (newAgency != null)
				return Response.success("Password Added Successfully");
		}
		return Response.error("password not Match");
	}
}
