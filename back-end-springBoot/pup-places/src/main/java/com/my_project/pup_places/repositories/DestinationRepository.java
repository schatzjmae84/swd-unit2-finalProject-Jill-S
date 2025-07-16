package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
}
