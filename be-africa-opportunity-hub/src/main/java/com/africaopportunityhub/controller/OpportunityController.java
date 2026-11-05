package com.africaopportunityhub.controller;

import com.africaopportunityhub.dto.OpportunityResponse;
import com.africaopportunityhub.service.OpportunityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/opportunities")
public class OpportunityController {

    private final OpportunityService opportunityService;

    public OpportunityController(OpportunityService opportunityService) {
        this.opportunityService = opportunityService;
    }

    @GetMapping("/all")
    public List<OpportunityResponse> getAllOpportunities(){
        return opportunityService.getAllOpportunities();
    }

    @GetMapping("/status/{status}")
    public List<OpportunityResponse> getOpportunitiesByStatus(@PathVariable String status) {
        return opportunityService.getOpportunitiesByStatus(status);
    }

    @GetMapping("/category/{categoryId}")
    public List<OpportunityResponse> getOpportunitiesByCategoryId(@PathVariable Long categoryId) {
        return opportunityService.getOpportunitiesByCategoryId(categoryId);
    }

    @GetMapping("/categoryName/{categoryName}")
    public List<OpportunityResponse> getOpportunitiesByCategoryName(@PathVariable String categoryName) {
        return opportunityService.getOpportunitiesByCategoryName(categoryName);
    }

}
