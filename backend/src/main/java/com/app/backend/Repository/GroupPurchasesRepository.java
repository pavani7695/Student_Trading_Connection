package com.app.backend.Repository;

import com.app.backend.Entity.GroupPurchases;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupPurchasesRepository extends JpaRepository<GroupPurchases, Integer> {

}
