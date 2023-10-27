package com.app.backend.Repository;

import com.app.backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    public User findByEmailId(String emailID);

    public User findByEmailIdAndPassword(String emailId, String password);

//    @Query("SELECT DISTINCT * FROM User u WHERE u.id IN (SELECT gp.buyerid FROM GroupPurchase gp WHERE gp.productid = :product_id)")
@Query("SELECT DISTINCT u FROM User u WHERE u.id IN (SELECT gp.buyerID FROM GroupPurchases gp WHERE gp.productID = :product_id)")
List<User> getUsersByProductForGroupPurchase(int product_id);

}
