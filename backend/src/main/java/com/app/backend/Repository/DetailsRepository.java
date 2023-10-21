package com.app.backend.Repository;

import com.app.backend.Entity.Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsRepository extends JpaRepository<Detail, Integer> {
    Detail findByDetailID(int detailId);
}
