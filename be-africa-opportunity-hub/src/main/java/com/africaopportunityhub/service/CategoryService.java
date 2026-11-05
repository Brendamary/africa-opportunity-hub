package com.africaopportunityhub.service;



import com.africaopportunityhub.dto.CategoryResponse;
import com.africaopportunityhub.model.Category;
import com.africaopportunityhub.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryResponse> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();

        return categories.stream().map(category -> new CategoryResponse(category.getId(), category.getName(), category.getSlug())).toList();
    }

    public CategoryResponse findById(Long id){
        Category category = categoryRepository.findCategoryById(id);
        return new CategoryResponse(category.getId(), category.getName(), category.getSlug());
    }
}
