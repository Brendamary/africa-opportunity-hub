
package com.africaopportunityhub.dto;

public class CategoryResponse {

    private final Long id;
    private final String name;
    private final String slug;

    public CategoryResponse(Long id, String name, String slug) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSlug(){
        return slug;
    }
}
