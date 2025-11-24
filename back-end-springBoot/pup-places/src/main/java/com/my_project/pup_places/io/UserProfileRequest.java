package com.my_project.pup_places.io;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserProfileRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 3, message = "Name should be at least 3 characters long")
    private String name;

    @NotNull(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 8, message = "Passwords must be at least 8 characters")
    private String password;
}
