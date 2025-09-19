package com.my_project.pup_places.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserProfileDTO {

    private String email;
    private String name;
    private String password;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
