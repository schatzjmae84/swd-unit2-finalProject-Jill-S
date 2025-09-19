package com.my_project.pup_places.exceptions;

public class ItemExistsException extends RuntimeException {

    public ItemExistsException(String message) {
        super(message);
    }
}
