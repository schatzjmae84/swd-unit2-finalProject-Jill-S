package com.my_project.pup_places.services.impl;

import com.my_project.pup_places.exceptions.ItemExistsException;
import com.my_project.pup_places.models.UserProfile;
import com.my_project.pup_places.models.dto.UserProfileDTO;
import com.my_project.pup_places.repositories.UserProfileRepository;
import com.my_project.pup_places.services.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserProfileServiceImpl implements UserProfileService {

    private final UserProfileRepository userProfileRepository;
    private final ModelMapper modelMapper;

    private final PasswordEncoder encoder;

    @Override
    public UserProfileDTO createUserProfile (UserProfileDTO userProfileDTO) {
        if (userProfileRepository.existsByEmail(userProfileDTO.getEmail())) {
            throw new ItemExistsException("Profile already exists for " + userProfileDTO.getEmail());
        }
        userProfileDTO.setPassword(encoder.encode(userProfileDTO.getPassword()));
        UserProfile userProfile = mapToProfileEntity(userProfileDTO);
        userProfile = userProfileRepository.save(userProfile); // returns saved object with generated id
        return mapToProfileDTO(userProfile);
    }

    // Mapper method to map values from entity to DTO
    private UserProfileDTO mapToProfileDTO(UserProfile profileEntity) {
        return modelMapper.map(profileEntity, UserProfileDTO.class);
    }

    // Mapper method to map values from DTO to entity
    private UserProfile mapToProfileEntity(UserProfileDTO userProfileDTO) {
        return modelMapper.map(userProfileDTO, UserProfile.class);
    }
}