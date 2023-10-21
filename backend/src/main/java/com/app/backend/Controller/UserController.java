package com.app.backend.Controller;

import com.app.backend.Entity.Details;
import com.app.backend.Entity.User;
import com.app.backend.Repository.UserRepository;
import com.app.backend.Service.UserService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.slf4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.management.DescriptorAccess;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {



    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository repo;
    @GetMapping("/test")
    public String tests(){
        User user = new User();
        user.setUserName("NeoPix");
        user.setPassword("123");
        user.setEmailId("neopix@gmail.com");

        Details details = new Details();
        details.setAddress("Redwood hills");
        details.setLevel("Silver");
        details.setPhone("91287349823");

        user.setDetails(details);
        details.setUser(user);


        User save = repo.save(user);


        logger.info(save.getUserName());
        return  "JSK!!";
    }





    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) throws Exception {
//        User tempUser = user;
        String tempEmailId = user.getEmailId();
        if (tempEmailId != null && !tempEmailId.isEmpty()) {
            User existingUser = service.fetchUserByEmailId(tempEmailId);
            if (existingUser != null) {
                throw new Exception("User with " + tempEmailId + " already exists");
            }
        }
//        String tempProfileLevel = user.getProfileLevel();
//        if(tempProfileLevel ==null)
//            user.setProfileLevel("Bronze");
        return service.saveUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPass = user.getPassword();
        User userObj = null;
        if (tempEmailId != null && tempPass != null) {
            userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null) {
            throw new Exception("Bad Credentials");
        }
        return userObj;
    }

    @GetMapping("")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable int userId) throws Exception{
        User user = service.getUserById(userId);
        if (user == null) {
            // Handle the case where the user with the specified ID is not found.
            throw new Exception("User with ID " + userId + " not found");
        }
        return user;
    }

}
