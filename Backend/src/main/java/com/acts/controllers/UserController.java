package com.acts.controllers;

import java.util.ArrayList;
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

import com.acts.entities.User;
import com.acts.models.ChangePasswordDTO;
import com.acts.models.CredentialsDTO;
import com.acts.models.Response;
import com.acts.models.UserDTO;
import com.acts.services.UserService;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(CredentialsDTO cred) {
		User user = userService.authenticate(cred.getEmail(), cred.getPassword());
		UserDTO newUser = UserDTO.fromEntity(user);
		if (user != null) {
			return Response.success(newUser);
		}
		return Response.error("Login Failed!");
	}

	@PostMapping("/register")
	public ResponseEntity<?> signup(UserDTO user) {
		User u = UserDTO.toEntity(user);
		User u1 = userService.save(u);
		UserDTO dto = UserDTO.fromEntity(u1);
		if (dto != null)
			return Response.success(dto);
		return Response.error("Registration Failed!");
	}

	@PostMapping("/forgot")
	public ResponseEntity<?> changePassword(CredentialsDTO cred) {
		User user = userService.updatePassword(cred.getEmail(), cred.getPassword());
		if (user != null) {
			return Response.success(user);
		}
		return Response.error("Paswword Updation Failed!");
	}
	
	@PostMapping("/changepassword")
	public ResponseEntity<?> changeUserPassword(ChangePasswordDTO dto){
		User user = userService.findUserById(dto.getId());
		System.out.println(user);
		if(user == null)
			return Response.error("Agency Not Found");
		if(passwordEncoder.matches(dto.getOldPassword(), user.getPassword())) {
			//String newPassword = passwordEncoder.encode(dto.getNewPassword());
			user.setPassword(dto.getNewPassword());
			User newUser =userService.save(user);
			if(newUser!=null)
			return Response.success("Password Added Successfully");
		}
		return Response.error("password not Match");	
	}

	@GetMapping("/getprofile/{id}")
	public ResponseEntity<?> getProfile(@PathVariable int id) {
		User user = userService.findUserById(id);
		System.out.println(user.getPassword());
		UserDTO newUser = UserDTO.fromEntity(user);
		if (newUser != null) {
			return Response.success(newUser);
		}
		return Response.error("Failed!");
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable int id, UserDTO user) {
		User newUser = UserDTO.toEntity(user);
		User u = userService.findUserById(id);
		u.setFirstName(newUser.getFirstName());
		u.setLastName(newUser.getLastName());
		u.setEmail(newUser.getEmail());
		u.setMobileNo(newUser.getMobileNo());
		u.setAddress(newUser.getAddress());
		User u1 = userService.updateUser(u);
		UserDTO dto = UserDTO.fromEntity(u1);
		if (dto != null)
			return Response.success(dto);
		return Response.error("Updation Failed!");
	}

	@GetMapping("/userlist")
	public ResponseEntity<?> findUserAll() {
		List<User> list = userService.findUserAll();
		List<UserDTO> result = new ArrayList<>();
		for (User user : list)
			result.add(UserDTO.fromEntity(user));
		return Response.success(result);
	}

	@DeleteMapping("/userlist/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
		boolean success = userService.deleteById(id);
		return ResponseEntity.ok(success);
	}
}
