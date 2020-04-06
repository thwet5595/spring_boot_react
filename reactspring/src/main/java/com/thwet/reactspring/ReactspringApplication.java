package com.thwet.reactspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.thwet.reactspring.model.User;
import com.thwet.reactspring.repository.UserRepository;

@SpringBootApplication
public class ReactspringApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(ReactspringApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		user1.setFirstName("Devglan");
		user1.setLastName("Devglan");
		user1.setSalary(12345);
		user1.setAge(23);
		user1.setUsername("devglan");
		user1.setPassword("devglan");
		userRepository.save(user1);

		User user2 = new User();
		user2.setFirstName("John");
		user2.setLastName("Doe");
		user2.setSalary(4567);
		user2.setAge(34);
		user2.setUsername("john");
		user2.setPassword("john");
		userRepository.save(user2);
	}
}
