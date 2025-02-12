package com.acts.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.acts.daos.UserDao;
import com.acts.entities.User;

@Transactional
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User findUserByEmail(String email) {
		User user = userDao.findUserByEmail(email);
		return user;
	}

	@Override
	public User save(User user) {
		String encPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encPassword);
		return userDao.save(user);
	}

	@Override
	public User authenticate(String email, String password) {
		User user = findUserByEmail(email);
		if (user != null && passwordEncoder.matches(password, user.getPassword()))
			return user;
		return null;
	}

	@Override
	public User updatePassword(String email, String password) {
		User user = this.findUserByEmail(email);
		if (user != null) {
			user.setPassword(password);
			return this.save(user);
		}
		return null;
	}

	@Override
	public User findUserById(int id) {
		Optional<User> user = userDao.findById(id);
		return user.orElse(null);
	}

	@Override
	public User updateUser(User user) {
		return userDao.save(user);
	}

	@Override
	public List<User> findUserAll() {
		return userDao.findAll();
	}

	@Override
	public boolean deleteById(int id) {
		if (userDao.existsById(id)) {
			userDao.deleteById(id);
			return true;
		}
		return false;
	}
}