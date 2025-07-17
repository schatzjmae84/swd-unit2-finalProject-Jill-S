package com.my_project.pup_places.repositories;

import com.my_project.pup_places.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {
}
