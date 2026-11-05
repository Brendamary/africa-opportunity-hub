
package com.africaopportunityhub.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class OpportunityResponse {

    private Long id;
    private Long categoryId;
    private String title;
    private String organization;
    private String description;
    private String eligibilityScope;
    private String eligibilityNotes;
    private LocalDate deadline;
    private String sourceUrl;
    private String applicationUrl;
    private String status;
    private LocalDateTime publishedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public OpportunityResponse(
            Long id,
            Long categoryId,
            String title,
            String organization,
            String description,
            String eligibilityScope,
            String eligibilityNotes,
            LocalDate deadline,
            String sourceUrl,
            String applicationUrl,
            String status,
            LocalDateTime publishedAt,
            LocalDateTime createdAt,
            LocalDateTime updatedAt
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.organization = organization;
        this.description = description;
        this.eligibilityScope = eligibilityScope;
        this.eligibilityNotes = eligibilityNotes;
        this.deadline = deadline;
        this.sourceUrl = sourceUrl;
        this.applicationUrl = applicationUrl;
        this.status = status;
        this.publishedAt = publishedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public String getTitle() {
        return title;
    }

    public String getOrganization() {
        return organization;
    }

    public String getDescription() {
        return description;
    }

    public String getEligibilityScope() {
        return eligibilityScope;
    }

    public String getEligibilityNotes() {
        return eligibilityNotes;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public String getApplicationUrl() {
        return applicationUrl;
    }

    public String getStatus() {
        return status;
    }

    public LocalDateTime getPublishedAt() {
        return publishedAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
