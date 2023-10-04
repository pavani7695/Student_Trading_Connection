package com.app.backend.Repository;

import com.app.backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    public User findByEmailId(String emailID);

    public User findByEmailIdAndPassword(String emailId, String password);
}
