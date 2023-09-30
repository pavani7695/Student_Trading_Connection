package com.app.backend.Service;

import com.app.backend.Enitity.User;
import com.app.backend.Repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    @Autowired
    private RegistrationRepository repo;
    public User saveUser(User user){
        return repo.save(user);
    }

    public User fetchUserByEmailId(String emailID){
        return repo.findByEmailId(emailID);
    }

    public User fetchUserByEmailIdAndPassword(String emailId, String password) {
        return repo.findByEmailIdAndPassword(emailId, password);
    }
}
