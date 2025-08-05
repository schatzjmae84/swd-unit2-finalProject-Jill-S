package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
    // Custom query method to find a destination by its name
    Optional <Destination> findByName(String name);  // Method to find a destination by its name
}
