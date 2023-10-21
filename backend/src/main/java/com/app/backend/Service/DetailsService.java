package com.app.backend.Service;

import com.app.backend.Entity.Detail;
import com.app.backend.Repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailsService {
    @Autowired
    private DetailsRepository detailsRepository;

    public Detail fetchDetailsById(int detailId){
        return detailsRepository.findByDetailID(detailId);
    }
}
