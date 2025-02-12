package com.acts.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Agency;

public interface AgencyDao extends JpaRepository<Agency, Integer>{
	Agency findAgencyByEmail(String email);
	List<Agency> findAll();
	Agency findUserByEmail(String email);
}
