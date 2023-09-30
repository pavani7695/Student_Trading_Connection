package com.app.backend.Controller;

import com.app.backend.Enitity.User;
import com.app.backend.Service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.env.OriginTrackedMapPropertySource;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {
    @Autowired
    private RegistrationService service;
    @PostMapping("/registerUser")
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        if(tempEmailId != null && !"".equals(tempEmailId)) {
            User userObj = service.fetchUserByEmailId(tempEmailId);
            if(userObj != null) {
                throw new Exception("user with "+tempEmailId+" is already exist");
            }
        }

        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }
    @PostMapping("/loginUser")
    @CrossOrigin(origins= "http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPass = user.getPassword();
        User userObj = null;
        if(tempEmailId != null && tempPass != null) {
            userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if(userObj == null)
            throw new Exception("Bad Credentials");
        return userObj;
    }

}
