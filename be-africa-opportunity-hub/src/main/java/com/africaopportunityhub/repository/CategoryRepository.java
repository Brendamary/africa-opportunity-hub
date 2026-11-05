package com.africaopportunityhub.repository;

import com.africaopportunityhub.model.Category;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepository {

    private final JdbcTemplate jdbcTemplate;

    public CategoryRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Category> findAll() {
        String sql = " SELECT id, name, slug FROM categories ORDER BY id ASC ";

        return jdbcTemplate.query(sql, (resultSet, rowNumber) -> new Category(resultSet.getLong("id"), resultSet.getString("name"), resultSet.getString("slug")));
    }

    public Category findCategoryById(Long id) {
        String sql = "SELECT * FROM categories WHERE id = ?";

        return jdbcTemplate.queryForObject(
                sql,
                (rs, rowNum) -> {
                    Category category = new Category();
                    category.setId(rs.getLong("id"));
                    category.setName(rs.getString("name"));
                    return category;
                },
                id
        );
    }
}

