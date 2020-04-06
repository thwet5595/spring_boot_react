package com.thwet.reactspring.config;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.thwet.reactspring.model.ApiResponse;

@RestControllerAdvice
public class ExceptionAdvice {

	@SuppressWarnings("rawtypes")
	@ExceptionHandler(RuntimeException.class)
	public ApiResponse handleNotFoundException(RuntimeException ex) {
		ApiResponse apiResponse = new ApiResponse(400, "Bad request", null);
		return apiResponse;
	}

}