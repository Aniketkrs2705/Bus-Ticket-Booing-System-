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

import com.acts.entities.Bus;
import com.acts.models.BusDTO;
import com.acts.models.Response;
import com.acts.services.BusService;

@CrossOrigin
@RequestMapping("/bus")
@RestController
public class BusController {
	@Autowired
	private BusService busService;

	@GetMapping("/agency/{id}")
	public ResponseEntity<?> getAllBusesNoOfAgency(@PathVariable int id) {
		List<Bus> list = busService.findAllByAgency(id);
		List<String> busNoList = new ArrayList<String>();
		for (Bus bus : list) {
			busNoList.add(bus.getBusNo());
		}
		if (busNoList != null)
			return Response.success(busNoList);
		return Response.error("Bus Not Found");
	}

	@PostMapping("/add")
	public ResponseEntity<?> addBus(BusDTO dto) {
		System.out.println(dto);
		boolean isAdded = busService.addBus(dto);
		System.out.println(isAdded);
		if (isAdded)
			return Response.success("Bus Is Added");
		return Response.error("Bus is Not Added");

	}

	@GetMapping("/agency/data/{id}")
	public ResponseEntity<?> getAllBusesOfAgency(@PathVariable int id) {
		List<Bus> list = busService.findAllByAgency(id);
		List<BusDTO> BusDTOList = new ArrayList<>();
		for (Bus bus : list) {
			BusDTO newBusDTO = BusDTO.fromEntity(bus);
			System.out.println(newBusDTO);
			newBusDTO.setAgencyId(id);
			BusDTOList.add(newBusDTO);
		}
		if (BusDTOList != null)
			return Response.success(BusDTOList);
		return Response.error("Bus Not Found");
	}

	@DeleteMapping("/deleteBus/{id}") // /bus/deleteBus/
	public ResponseEntity<?> deleteBus(@PathVariable int id) {
		Bus bus = busService.findByBusId(id);
		boolean isDeleted = busService.deleteBus(bus);
		if (isDeleted)
			return Response.success("Deleted Successfully");
		return Response.error("Not Deleted ");
	}
}
