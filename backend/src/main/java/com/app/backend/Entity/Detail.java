package com.app.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Details")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int detailID;
    private String phone;
    private String address;
    private String level="Bronze";

    @OneToOne(mappedBy = "details", cascade = CascadeType.ALL)
    private User user;
}
