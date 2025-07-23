package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.Activity;
import com.my_project.pup_places.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api/idealInfo") // Base URL for the API
public class ActivityController {

    @Autowired
    ActivityRepository activityRepository;

    // GET method to retrieve a single list of Doggy Destinations by their same ID
    // Corresponds to the endpoint: /api/idealInfo/activities/{activityId}
    @GetMapping(value = "activities/{activityId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getActivityById(@PathVariable(value = "activityId") int activityId) {
        Activity currentActivity = activityRepository.findById(activityId).orElse(null);
        if (currentActivity != null) {
            return new ResponseEntity<>(currentActivity, HttpStatus.OK); // 200 OK
        } else {
            String response = "The activity with the ID of " + activityId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}
