package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.Form;
import com.my_project.pup_places.repositories.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600) // Allow cross-origin requests from any origin
@RestController
@RequestMapping("/api/pupPlaces") // Base URL for the API
public class FormController {

    @Autowired
    FormRepository formRepository;

    //This controller will be built on more when I work on Phase 3 of the project and include authentication and authorization
    //POST method to create a new form
    //Corresponds to the endpoint: /api/pupPlaces/forms
    @PostMapping(value = "/forms", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewForm(@RequestBody Form form) {
        Form newForm = new Form(form.getPupName(),
                form.getUsername(),
                form.getDogBreed(),
                form.getActivity(),
                form.getZipCode()
        );
        formRepository.save(newForm);
        return new ResponseEntity<>(newForm, HttpStatus.CREATED); // 201 Created
    }
}

