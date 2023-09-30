package com.app.backend.Repository;

import com.app.backend.Enitity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User,Integer> {
    public User findByEmailId(String emailID);

    public User findByEmailIdAndPassword(String emailId, String password);
}
