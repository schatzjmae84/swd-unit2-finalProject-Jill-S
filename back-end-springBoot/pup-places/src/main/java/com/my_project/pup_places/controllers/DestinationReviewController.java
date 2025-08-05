package com.my_project.pup_places.controllers;
import com.my_project.pup_places.models.DestinationReview;
import com.my_project.pup_places.repositories.DestinationReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600) // Allow cross-origin requests from any origin
@RestController
@RequestMapping("/api/destinationReviews") // Base URL for the API
public class DestinationReviewController {

    @Autowired
    DestinationReviewRepository destinationReviewRepository;

    // POST method to create a new destination review
    // Corresponds to the endpoint: /api/destinationReviews/add
    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createDestinationReview(@RequestBody DestinationReview destinationReview) {
        DestinationReview newDestinationReview = new DestinationReview(
                destinationReview.getName(),
                destinationReview.getRating(),
                destinationReview.getReview()
        );
        destinationReviewRepository.save(newDestinationReview);
        return new ResponseEntity<>(newDestinationReview, HttpStatus.CREATED); // 201 Created
    }

    // GET method to retrieve all destination reviews to be displayed on the reviews page
    // Corresponds to the endpoint: /api/destinationReviews
    @GetMapping(value = "")
    public ResponseEntity<?> getAllDestinationReviews() {
        List<DestinationReview> allDestinationReviews = destinationReviewRepository.findAll();
        return new ResponseEntity<>(allDestinationReviews, HttpStatus.OK); // 200 OK
    }

    // PUT method to update an existing destination review by its ID
    // Corresponds to the endpoint: /api/destinationReviews/update/{id}
    @PutMapping(value = "/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateDestinationReview(@PathVariable (value = "id") int id, @RequestBody DestinationReview updateddestinationReview) {
    DestinationReview currentDestinationReview = destinationReviewRepository.findById(id).orElse(null);
        if (currentDestinationReview != null) {
            currentDestinationReview.setName(updateddestinationReview.getName());
            currentDestinationReview.setRating(updateddestinationReview.getRating());
            currentDestinationReview.setReview(updateddestinationReview.getReview());
            destinationReviewRepository.save(currentDestinationReview);
            return new ResponseEntity<>(currentDestinationReview, HttpStatus.OK); // 200 OK
        } else {
            String response = "The review with the ID of " + id + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }

    //DELETE method to delete a destination review by its ID
    // Corresponds to the endpoint: /api/destinationReviews/delete/{id}
    @DeleteMapping(value = "/delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteDestinationReview(@PathVariable(value = "id") int id) {
        DestinationReview currentDestinationReview = destinationReviewRepository.findById(id).orElse(null);
        if (currentDestinationReview != null) {
            destinationReviewRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
        } else {
            String response = "The review with the ID of " + id + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}
