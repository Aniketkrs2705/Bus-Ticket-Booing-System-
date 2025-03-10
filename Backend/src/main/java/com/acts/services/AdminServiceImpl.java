package com.acts.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.AdminDao;
import com.acts.entities.Admin;

@Transactional
@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDao adminDao;

	@Override
	public Admin findAdminById(int id) {
		Optional<Admin> admin = adminDao.findById(id);
		return admin.orElse(null);
	}
	
	@Override
	public Admin findAdminByEmail(String email) {
		Admin admin = adminDao.findAdminByEmail(email);
		return admin;
	}

	@Override
	public Admin authenticate(String email, String password) {
		Admin admin = adminDao.findAdminByEmail(email);
		if(admin != null && admin.getPassword().equals(password))
			return admin;
		return null;
	}

	@Override
	public Admin save(Admin admin) {
		return adminDao.save(admin);
	}
	
	@Override
	public Admin updatePassword(String email, String password) {
		Admin admin = this.findAdminByEmail(email);
		if (admin != null) {
			admin.setPassword(password);
			return this.save(admin);
		}
		return null;
	}
}
