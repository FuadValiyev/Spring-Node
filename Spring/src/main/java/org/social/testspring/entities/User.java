package org.social.testspring.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @NotBlank(message = "name must not be empty")
    @Size(min = 2, max = 20, message = "required name must be min 2, max 20 character")
    private String name;

    @NotBlank(message = "surname must not be empty")
    @Size(min = 2, max = 30, message = "required surname must be min 2, max 20 character")
    private String surname;

    @NotBlank(message = "email not be empty")
    @Email
    private String email;
}
