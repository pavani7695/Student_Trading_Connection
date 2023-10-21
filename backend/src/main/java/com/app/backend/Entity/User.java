package com.app.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String emailId;
    private String userName;
    private String password;
    private String profileLevel = "Bronze";
    private String address;
    private String phone;
    private int bonusPoints = 0;
    private int userType = 0;
}
