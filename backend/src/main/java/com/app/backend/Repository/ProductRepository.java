package com.app.backend.Repository;

import com.app.backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findBySellerID(int sellerID);
    List<Product> findByBuyerIDAndStatus(int buyerID, int status);
    List<Product> findByStatusAndSellerIDNotAndBuyerID(int i, int userID, int i1);

    @Query("SELECT p FROM Product p WHERE p.productID IN (SELECT gp.productID FROM GroupPurchases gp WHERE gp.buyerID = :userID)")
    List<Product> findProductsByBuyerIDFromGroupPurchases(int userID);
}


