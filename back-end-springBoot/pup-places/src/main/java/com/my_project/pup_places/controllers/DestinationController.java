package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.Destination;
import com.my_project.pup_places.repositories.DestinationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@CrossOrigin(origins = "*", maxAge = 3600) // Allow cross-origin requests from any origin
@RestController
@RequestMapping("/api/doggyDestinations") // Base URL for the API
public class DestinationController {

    @Autowired
    DestinationRepository destinationRepository;

    // GET method to retrieve a single destination by its name
    // Corresponds to the endpoint: /api/doggyDestinations/destinations/{name}
    @GetMapping(value = "/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getDestinationByName(@PathVariable(value = "name") String name) {
        Destination currentDestination = destinationRepository.findByName(name).orElse(null);
        if (currentDestination != null) {
            return new ResponseEntity<>(currentDestination, HttpStatus.OK); // 200 OK
        } else {
            String response = "The destination with the name " + name + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}

