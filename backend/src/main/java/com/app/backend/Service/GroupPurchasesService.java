package com.app.backend.Service;

import com.app.backend.Entity.GroupPurchases;
import com.app.backend.Repository.GroupPurchasesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupPurchasesService {

    private final GroupPurchasesRepository groupPurchasesRepository;

    @Autowired
    public GroupPurchasesService(GroupPurchasesRepository groupPurchasesRepository) {
        this.groupPurchasesRepository = groupPurchasesRepository;
    }
    public GroupPurchases saveGroupPurchases(GroupPurchases groupPurchases){
        return groupPurchasesRepository.save(groupPurchases);
    }
}
