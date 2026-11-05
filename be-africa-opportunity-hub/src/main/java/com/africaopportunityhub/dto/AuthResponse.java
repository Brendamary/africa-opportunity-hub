package com.africaopportunityhub.dto;

public record AuthResponse(
        String message,
        String accessToken,
        String tokenType,
        UserResponse user
) {
}
