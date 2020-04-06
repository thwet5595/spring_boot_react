package com.thwet.reactspring.service;

import java.util.List;

import com.thwet.reactspring.dto.UserDto;
import com.thwet.reactspring.model.User;

public interface UserService {

	User save(UserDto user);

	List<User> findAll();

	void delete(int id);

	User findOne(String username);

	User findById(int id);

	UserDto update(UserDto userDto);
}
