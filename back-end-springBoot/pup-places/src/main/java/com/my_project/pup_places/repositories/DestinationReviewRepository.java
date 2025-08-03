package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.Destination;
import com.my_project.pup_places.models.DestinationReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DestinationReviewRepository extends JpaRepository<DestinationReview, Integer> {

}