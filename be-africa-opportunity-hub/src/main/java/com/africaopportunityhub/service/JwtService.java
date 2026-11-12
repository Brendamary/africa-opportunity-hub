
package com.africaopportunityhub.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;
import java.util.UUID;

@Service
public class JwtService {

    private static final long ACCESS_TOKEN_DURATION_MS = 15 * 60 * 1000L;
    private static final String ISSUER = "africa-opportunity-hub";
    private final SecretKey signingKey;

    public JwtService(@Value("${JWT_SECRET_BASE64}") String secretBase64) {
        byte[] keyBytes = Decoders.BASE64.decode(secretBase64);
        this.signingKey = Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(UserDetails userDetails) {

        Instant now = Instant.now();
        Instant expiration = now.plusMillis(ACCESS_TOKEN_DURATION_MS);

        String role = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .filter(authority -> authority != null)
                .map(authority ->
                        authority.replaceFirst("^ROLE_", "")
                )
                .findFirst()
                .orElseThrow(() ->
                        new IllegalStateException(
                                "User has no assigned authority."
                        )
                );


        String tokenId = UUID.randomUUID().toString();
        return Jwts.builder()
                .issuer(ISSUER)
                .subject(userDetails.getUsername())
                .claim("role", role)
                .id(tokenId)
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiration))
                .signWith(signingKey)
                .compact();
    }

    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    public String extractRole(String token) {
        return extractAllClaims(token)
                .get("role", String.class);
    }

    public boolean isTokenValid(String token, UserDetails userDetails)
    {
        try {

            Claims claims = extractAllClaims(token);
            String username = claims.getSubject();
            String role = claims.get("role", String.class);
            String tokenId = claims.getId();
            Date expiration = claims.getExpiration();

            if (username == null || role == null || tokenId == null || tokenId.isBlank() || expiration == null) {
                return false;
            }

            if (!username.equals(userDetails.getUsername())) {
                return false;
            }


            boolean roleMatches = userDetails.getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .filter(authority -> authority != null)
                    .anyMatch(authority ->
                            authority.replaceFirst("^ROLE_", "")
                                    .equals(role)
                    );

            return roleMatches && expiration.after(new Date());

        } catch (JwtException | IllegalArgumentException exception) {
            return false;
        }
    }

    private Claims extractAllClaims(String token) {

        return Jwts.parser()

                .verifyWith(signingKey)
                .requireIssuer(ISSUER)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
