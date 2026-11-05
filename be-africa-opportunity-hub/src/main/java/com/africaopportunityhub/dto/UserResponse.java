
package com.africaopportunityhub.dto;

import java.time.LocalDateTime;

public record UserResponse(
        Long id,
        String email,
        String full_names,
        String role,
        LocalDateTime createdAt
) {}
