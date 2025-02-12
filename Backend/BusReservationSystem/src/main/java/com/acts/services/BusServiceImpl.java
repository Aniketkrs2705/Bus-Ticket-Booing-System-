package com.acts.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acts.daos.BusDao;
import com.acts.entities.Agency;
import com.acts.entities.Bus;
import com.acts.models.BusDTO;

@Transactional
@Service
public class BusServiceImpl implements BusService {
	@Autowired
	private BusDao busDao;
	@Autowired
	private AgencyService agencyService;

	@Override
	public List<Bus> findAllByAgency(int id) {
		Agency agency = agencyService.findById(id);
		List<Bus> list = new ArrayList<Bus>();
		if (agency != null) {
			list = agency.getBusList();
		}
		return list;
	}

	@Override
	public Bus findByBusNo(String busNo) {
		Bus bus = busDao.findByBusNo(busNo);
		return bus;
	}

	@Override
	public boolean addBus(BusDTO dto) {
		Bus bus = new Bus();
		Agency agency = agencyService.findById(dto.getAgencyId());
		bus.setAgency(agency);
		bus.setBusNo(dto.getBusNo());
		bus.setModel(dto.getModel());
		bus.setType(dto.getType());
		Bus newBus = busDao.save(bus);
		if (newBus != null)
			return true;
		return false;
	}

	@Override
	public Bus findByBusId(int id) {
		Optional<Bus> bus = busDao.findById(id);
		return bus.orElse(null);
	}

	@Override
	public boolean deleteBus(Bus bus) {
		if (bus != null) {
			busDao.delete(bus);
			return true;
		}

		return false;
	}
}
