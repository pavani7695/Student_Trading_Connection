package com.app.backend;

import com.app.backend.Entity.User;
import com.app.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {
	@Autowired
	private UserRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
