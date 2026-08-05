package com.veterinaria.demo.api.models;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class User {
    private String id;
    private String name;
    private int age;
    private String email;

}