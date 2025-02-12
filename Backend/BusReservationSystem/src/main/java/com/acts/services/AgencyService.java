package com.acts.services;

import java.util.List;

import com.acts.entities.Agency;
import com.acts.entities.Trip;

public interface AgencyService {
	Agency findAgencyByEmail(String email);
	Agency authenticate(String email, String password);
	List<Agency> findAgencyAll();
	Agency saveAgency(Agency agency);
	boolean deleteById(int id);
	Agency findAgencyById(int id);
	List<Trip> findAllAgencyTrips(int agencyId);
	Agency findById(int agencyId);
	Agency save(Agency agency);
	Agency updatePassword(String email, String password);
	Agency updateAgency(Agency agency);
}
