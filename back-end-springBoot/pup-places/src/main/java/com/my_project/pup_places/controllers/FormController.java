package com.my_project.pup_places.controllers;

import com.my_project.pup_places.models.Form;
import com.my_project.pup_places.repositories.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/pupPlaces") // Base URL for the API
public class FormController {

    @Autowired
    FormRepository formRepository;

    //GET method to retrieve a single form by its ID
    //Corresponds to the endpoint: /api/pupPlaces/forms/{formId}
    @GetMapping(value="/forms/{formId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFormById(@PathVariable(value = "formId") int formId) {
        Form currentForm = formRepository.findById(formId).orElse(null);
        if (currentForm != null) {
            return new ResponseEntity<>(currentForm, HttpStatus.OK); // 200 OK
        } else {
            String response = "The form with the ID of " + formId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }

    //POST method to create a new form
    //Corresponds to the endpoint: /api/pupPlaces/forms
    @PostMapping(value = "/forms", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewForm(@RequestBody Form form) {
        Form newForm = new Form(form.getPupName(), form.getUsername(), form.getDogBreed(), form.getActivity(), form.getZipCode());
        formRepository.save(newForm);
        return new ResponseEntity<>(newForm, HttpStatus.CREATED); // 201 Created
    }

    //PUT method to update an existing form by its ID
    //Corresponds to the endpoint: /api/pupPlaces/forms/{formId}
    @PutMapping(value = "/forms/{formId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateForm(@PathVariable (value = "formId") int formId, @RequestBody Form updatedForm) {
        Form currentForm = formRepository.findById(formId).orElse(null);
        if (currentForm != null) {
            currentForm.setPupName(updatedForm.getPupName());
            currentForm.setUsername(updatedForm.getUsername());
            currentForm.setDogBreed(updatedForm.getDogBreed());
            currentForm.setActivity(updatedForm.getActivity());
            currentForm.setZipCode(updatedForm.getZipCode());
            formRepository.save(currentForm);
            return new ResponseEntity<>(currentForm, HttpStatus.OK); // 200 OK
        } else {
            String response = "The form with the ID of " + formId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }

    //DELETE method to delete a form by its ID
    //Corresponds to the endpoint: /api/pupPlaces/forms/delete/{formId}
    @DeleteMapping(value = "/forms/delete/{formId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteForm(@PathVariable(value = "formId") int formId) {
        Form currentForm = formRepository.findById(formId).orElse(null);
        if (currentForm != null) {
            formRepository.deleteById(formId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
        } else {
            String response = "The form with the ID of " + formId + " does not exist.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404 Not Found
        }
    }
}
