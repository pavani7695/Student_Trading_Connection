package com.app.backend.Controller;

import com.app.backend.Entity.GroupPurchases;
import com.app.backend.Service.GroupPurchasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from http://localhost:4200
@RequestMapping("/groupPurchaseProducts")
public class GroupPurchasesController {
    @Autowired
    private GroupPurchasesService groupPurchasesService;

    @PostMapping("{productID}/{buyerID}")
    public GroupPurchases saveGroupProduct(@PathVariable int productID, @PathVariable int buyerID){
        GroupPurchases groupPurchases = new GroupPurchases();
        groupPurchases.setProductID(productID);
        groupPurchases.setBuyerID(buyerID);
        return groupPurchasesService.saveGroupPurchases(groupPurchases);
    }

}