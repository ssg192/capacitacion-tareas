package com.veterinaria.demo.api.models;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class LoginResponse {
    private User user;
}