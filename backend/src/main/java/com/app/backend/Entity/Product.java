package com.app.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productID;
    private int sellerID;
    private int buyerID;
    private String title;
    private String description;
    private int price;
    private String category;
    private int status = 0;
    private int isGroupPurchase = 0;
    @Column(length = 5120)
    private String imageUrl;
}