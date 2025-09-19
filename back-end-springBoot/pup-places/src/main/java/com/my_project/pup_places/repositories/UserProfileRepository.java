package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {

    Optional<UserProfile> findByEmail(String email);

    Boolean existsByEmail(String email);
}
