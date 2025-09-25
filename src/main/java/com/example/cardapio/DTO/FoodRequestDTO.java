package com.example.cardapio.DTO;

import com.example.cardapio.entity.Food;

public record FoodRequestDTO(String title, String image, Integer price) {

    FoodRequestDTO(Food food) {
        this(food.getTitle(), food.getImage(), food.getPrice());
    }
}
