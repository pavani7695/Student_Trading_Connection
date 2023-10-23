package com.app.backend.Repository;

import com.app.backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findBySellerID(int sellerID);
    List<Product> findByBuyerIDAndStatus(int buyerID, int status);
}


