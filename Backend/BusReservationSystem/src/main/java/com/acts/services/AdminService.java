package com.acts.services;

import com.acts.entities.Admin;

public interface AdminService {
	Admin findAdminByEmail(String email);
	Admin authenticate(String email, String password);
	Admin updatePassword(String email, String password);
	Admin save(Admin admin);
	Admin findAdminById(int id);
}
