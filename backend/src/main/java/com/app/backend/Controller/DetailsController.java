package com.app.backend.Controller;

import com.app.backend.Entity.Detail;
import com.app.backend.Service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/details")
public class DetailsController {
    @Autowired
    private DetailsService detailsService;

    @GetMapping("/{detailId}")
    public Detail getUserByDetailId(@PathVariable int detailId){
        return detailsService.fetchDetailsById(detailId);
    }
}
