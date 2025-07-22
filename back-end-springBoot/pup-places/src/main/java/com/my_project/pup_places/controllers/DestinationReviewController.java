package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.DestinationReview;
import com.my_project.pup_places.repositories.DestinationReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.Collections;

@RestController
@RequestMapping("/api/doggyDestinations/destinations/{destinationId}") // Base URL for the API
public class DestinationReviewController {

    @Autowired
    DestinationReviewRepository destinationReviewRepository;

    // POST method to create a new destination review
    // Corresponds to the endpoint: /api/doggyDestinations/destinations/{destinationId}/reviews
    @PostMapping(value = "/reviews", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createDestinationReview(@RequestBody DestinationReview destinationReview) {
        DestinationReview newDestinationReview = new DestinationReview(
                destinationReview.getName(),
                destinationReview.getRating(),
                destinationReview.getReview(),
                destinationReview.getDestination()
        );
        destinationReviewRepository.save(newDestinationReview);
        return new ResponseEntity<>(newDestinationReview, HttpStatus.CREATED); // 201 Created
    }

    //DELETE method to delete a destination review by its ID
    // Corresponds to the endpoint: /api/doggyDestinations/destinations/{destinationId}/reviews/delete/{reviewId}
    @DeleteMapping(value = "/reviews/delete/{reviewId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteDestinationReview(@PathVariable(value = "reviewId") int reviewId) {
        DestinationReview currentDestinationReview = destinationReviewRepository.findById(reviewId).orElse(null);
        if (currentDestinationReview != null) {
            destinationReviewRepository.deleteById(reviewId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
        } else {
            String response = "The review with the ID of " + reviewId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}
