package com.africaopportunityhub.repository;

import com.africaopportunityhub.model.Opportunity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


@Repository
public interface OpportunityRepository extends JpaRepository<Opportunity, Long> {

    @Query(value = " SELECT * FROM opportunities WHERE status = :status ", nativeQuery = true)
    List<Opportunity> findByStatus(@Param("status") String status);


    @Query(value = """
        SELECT o.*
        FROM opportunities o
        JOIN categories c ON o.category_id = c.id
        WHERE c.name = :categoryName
        """, nativeQuery = true)
    List<Opportunity> findByCategoryName(
            @Param("categoryName") String categoryName);


    List<Opportunity> findByCategoryId(Long categoryId);
}
