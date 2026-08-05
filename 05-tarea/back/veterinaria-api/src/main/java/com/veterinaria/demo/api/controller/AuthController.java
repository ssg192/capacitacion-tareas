package com.veterinaria.demo.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.veterinaria.demo.api.models.LoginRequest;
import com.veterinaria.demo.api.models.LoginResponse;
import com.veterinaria.demo.api.models.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(
            LoginResponse.builder()
            .user(
                User.builder()
                .id("1")
                .name("John Doe")
                .age(20)
                .email("john.doe@example.com")
                .build()
            ).build()
        );
    }
}