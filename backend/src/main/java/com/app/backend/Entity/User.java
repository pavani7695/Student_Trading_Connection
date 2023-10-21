package com.app.backend.Entity;

import jakarta.persistence.*;
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
    private int userId;
    private String emailId;
    private String userName;
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "detail_Id")
    private Details details;
}
