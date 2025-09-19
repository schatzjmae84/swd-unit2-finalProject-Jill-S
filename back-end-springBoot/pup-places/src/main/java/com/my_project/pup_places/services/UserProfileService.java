package com.my_project.pup_places.services;

import com.my_project.pup_places.models.dto.UserProfileDTO;

public interface UserProfileService {

    // Responsible for saving user profile to database

    UserProfileDTO createUserProfile(UserProfileDTO userProfileDTO);

}
