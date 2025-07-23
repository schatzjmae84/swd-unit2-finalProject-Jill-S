package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}
