package com.veterinaria.demo.api.models;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class LoginRequest {
    private String email;
    private String password;

}