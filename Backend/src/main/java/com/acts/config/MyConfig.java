package com.acts.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.acts.daos.UserDao;

@Configuration
public class MyConfig {

	private final UserDao userRepository;

	// Inject the repository and encoder via constructor
	public MyConfig(UserDao userRepository) {
		this.userRepository = userRepository;
	}

	@Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            // Fetch user from database
            com.acts.entities.User user = userRepository.findUserByEmail(username);
            
            // Handle user not found case
            if (user == null) {
                throw new UsernameNotFoundException("User not found with email: " + username);
            }

            // Build UserDetails object
            return User.builder()
                    .username(user.getEmail())
                    .password(user.getPassword())
                    .roles("USER") // Assign a default role
                    .build();
        };
    }

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager customAuthenticationManager(AuthenticationConfiguration configuration) throws Exception {
		return configuration.getAuthenticationManager();
	}
}
