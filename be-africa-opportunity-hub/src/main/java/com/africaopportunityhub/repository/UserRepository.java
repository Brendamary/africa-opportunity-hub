
package com.africaopportunityhub.repository;

import com.africaopportunityhub.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<User> findByEmail(String email) {
        String sql = """
                SELECT id, email, full_names, password_hash, role,
                       created_at, updated_at
                FROM users
                WHERE email = ?
                """;

        List<User> users = jdbcTemplate.query(sql, (rs, rowNum) -> {
            Timestamp created = rs.getTimestamp("created_at");
            Timestamp updated = rs.getTimestamp("updated_at");

            return new User(
                    rs.getLong("id"),
                    rs.getString("email"),
                    rs.getString("full_names"),
                    rs.getString("password_hash"),
                    rs.getString("role"),
                    created == null ? null : created.toLocalDateTime(),
                    updated == null ? null : updated.toLocalDateTime()
            );
        }, email);

        return users.stream().findFirst();
    }

    public User create(String email, String full_names, String passwordHash) {
        String sql = """
                INSERT INTO users (email, full_names, password_hash, role)
                VALUES (?, ?, ?, 'USER')
                """;

        jdbcTemplate.update(sql, email, full_names, passwordHash);

        return findByEmail(email)
                .orElseThrow(() ->
                        new IllegalStateException(
                                "User was created but could not be retrieved."
                        )
                );
    }
}
