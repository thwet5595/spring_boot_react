package com.thwet.reactspring.repository;

import org.springframework.data.repository.CrudRepository;

import com.thwet.reactspring.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	User findByUsername(String username);
}
