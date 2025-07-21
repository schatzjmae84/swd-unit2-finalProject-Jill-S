package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.Address;
import com.my_project.pup_places.models.Destination;
import com.my_project.pup_places.models.dto.DestinationDTO;
import com.my_project.pup_places.repositories.ActivityRepository;
import com.my_project.pup_places.repositories.DestinationRepository;
import com.my_project.pup_places.repositories.AddressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/doggyDestinations") // Base URL for the API
public class DestinationController {

    @Autowired
    DestinationRepository destinationRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    ActivityRepository activityRepository;

    // GET method to retrieve a single destination by its ID
    // Corresponds to the endpoint: /api/doggyDestinations/destinations/{destinationId}
    @GetMapping(value = "/destinations/{destinationId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getDestinationById(@PathVariable(value = "destinationId") int destinationId) {
        Destination currentDestination = destinationRepository.findById(destinationId).orElse(null);
        if (currentDestination != null) {
            return new ResponseEntity<>(currentDestination, HttpStatus.OK); // 200 OK
        } else {
            String response = "The destination with the ID of " + destinationId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}

