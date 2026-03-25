package com.example.cardapio.mapper;

import com.example.cardapio.DTO.FoodRequestDTO;
import com.example.cardapio.DTO.FoodResponseDTO;
import com.example.cardapio.entity.Food;
import org.springframework.stereotype.Component;

@Component
public class FoodMapper implements Mapper<FoodResponseDTO, FoodRequestDTO, Food> {

    @Override
    public Food toEntity(FoodRequestDTO foodDTO) {
        Food food =  new Food();
        food.setTitle(foodDTO.title());
        food.setImage(foodDTO.image());
        food.setPrice(foodDTO.price());
        return food;
    }

    @Override
    public FoodResponseDTO toDTO(Food food) {
        return new FoodResponseDTO(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}