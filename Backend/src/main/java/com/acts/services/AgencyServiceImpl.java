package com.acts.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.acts.daos.AgencyDao;
import com.acts.entities.Agency;
import com.acts.entities.Trip;

@Service
@Transactional
public class AgencyServiceImpl implements AgencyService {
	@Autowired
	private AgencyDao agencyDao;

	@Override
	public Agency findAgencyByEmail(String email) {
		Agency agency = agencyDao.findAgencyByEmail(email);
		return agency;
	}

	@Override
	public Agency authenticate(String email, String password) {
		Agency agency = agencyDao.findAgencyByEmail(email);
		if (agency != null && passwordEncoder.matches(password, agency.getPassword()))
			return agency;
		return null;
	}

	@Override
	public List<Agency> findAgencyAll() {
		return agencyDao.findAll();
	}

	@Override
	public Agency saveAgency(Agency agency) {
		String encPassword = passwordEncoder.encode(agency.getPassword());
		agency.setPassword(encPassword);
		return agencyDao.save(agency);
	}

	@Override
	public boolean deleteById(int id) {
		if (agencyDao.existsById(id)) {
			agencyDao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Agency findAgencyById(int id) {
		Optional<Agency> agency = agencyDao.findById(id);
		return agency.orElse(null);
	}

	@Override
	public Agency findById(int agencyId) {
		Optional<Agency> agency = agencyDao.findById(agencyId);
		return agency.orElse(null);
	}

	@Override
	public List<Trip> findAllAgencyTrips(int agencyId) {
		// System.out.println(agencyId);
		Agency agency = this.findById(agencyId);
		// System.out.println(agency.getName());

		if (agency != null)
			return agency.getTripList();
		return null;
	}

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Agency save(Agency agency) {
		String encPassword = passwordEncoder.encode(agency.getPassword());
		agency.setPassword(encPassword);
		return agencyDao.save(agency);
	}

	@Override
	public Agency updatePassword(String email, String password) {
		Agency agency = this.findAgencyByEmail(email);
		if (agency != null) {
			agency.setPassword(password);
			return this.save(agency);
		}
		return null;
	}

	@Override
	public Agency updateAgency(Agency agency) {
		System.out.println(agency.getPassword());
		return agencyDao.save(agency);
	}
}
