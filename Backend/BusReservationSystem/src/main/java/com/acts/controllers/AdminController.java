package com.acts.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acts.entities.Admin;
import com.acts.models.AdminDTO;
import com.acts.models.CredentialsDTO;
import com.acts.models.Response;
import com.acts.services.AdminService;

@CrossOrigin
@RequestMapping("/admin")
@RestController
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginAdmin(CredentialsDTO cred){
		Admin admin = adminService.authenticate(cred.getEmail(), cred.getPassword());
		AdminDTO a = AdminDTO.fromEntity(admin);
		if(a != null) {
			return Response.success(a);
		}
		return Response.error("Login Failed!");
	}
	
	@PostMapping("/adminforgot")
	public ResponseEntity<?> changePassword(CredentialsDTO cred) {
		Admin admin = adminService.updatePassword(cred.getEmail(), cred.getPassword());
		if (admin != null) {
			return Response.success(admin);
		}
		return Response.error("Password Updation Failed!");
	}

	@GetMapping("/getprofile/{id}")
	public ResponseEntity<?> getProfile(@PathVariable int id) {
		Admin admin = adminService.findAdminById(id);
		AdminDTO newAdmin = AdminDTO.fromEntity(admin);
		if (newAdmin != null) {
			return Response.success(newAdmin);
		}
		return Response.error(newAdmin);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable int id, AdminDTO admin) {
		Admin newAdmin = AdminDTO.toEntity(admin);
		Admin a = adminService.findAdminById(id);
		a.setName(newAdmin.getName());
		a.setEmail(newAdmin.getEmail());
		Admin a1 = adminService.save(a);
		AdminDTO dto = AdminDTO.fromEntity(a1);
		if (dto != null)
			return Response.success(dto);
		return Response.error("Updation Failed!");
	}
}
