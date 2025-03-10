package com.acts.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acts.entities.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer>{
	Admin findAdminByEmail(String email);
}
