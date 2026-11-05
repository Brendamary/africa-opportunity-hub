
package com.africaopportunityhub.service;

import com.africaopportunityhub.dto.OpportunityResponse;
import com.africaopportunityhub.model.Opportunity;
import com.africaopportunityhub.repository.OpportunityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpportunityService {

    private final OpportunityRepository opportunityRepository;

    public OpportunityService(
            OpportunityRepository opportunityRepository
    ) {
        this.opportunityRepository = opportunityRepository;
    }

    public List<OpportunityResponse> getAllOpportunities() {
        return opportunityRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    public List<OpportunityResponse> getOpportunitiesByStatus(String status) {
        return opportunityRepository.findByStatus(status).stream().map(this::convertToDto).toList();
    }

    public List<OpportunityResponse> getOpportunitiesByCategoryId(Long categoryId) {

        return opportunityRepository.findByCategoryId(categoryId).stream().map(this::convertToDto).toList();
    }

    public List<OpportunityResponse> getOpportunitiesByCategoryName(String name) {

        return opportunityRepository.findByCategoryName(name).stream().map(this::convertToDto).toList();
    }

    private OpportunityResponse convertToDto(Opportunity opportunity) {
        return new OpportunityResponse(
                opportunity.getId(),
                opportunity.getCategoryId(),
                opportunity.getTitle(),
                opportunity.getOrganization(),
                opportunity.getDescription(),
                opportunity.getEligibilityScope(),
                opportunity.getEligibilityNotes(),
                opportunity.getDeadline(),
                opportunity.getSourceUrl(),
                opportunity.getApplicationUrl(),
                opportunity.getStatus(),
                opportunity.getPublishedAt(),
                opportunity.getCreatedAt(),
                opportunity.getUpdatedAt()
        );
    }
}
