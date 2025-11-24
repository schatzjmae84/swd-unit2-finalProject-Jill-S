package com.my_project.pup_places;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PupPlacesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PupPlacesApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

}
