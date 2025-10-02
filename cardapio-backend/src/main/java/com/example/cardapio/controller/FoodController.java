package com.example.cardapio.controller;

import com.example.cardapio.DTO.FoodRequestDTO;
import com.example.cardapio.DTO.FoodResponseDTO;
import com.example.cardapio.entity.Food;
import com.example.cardapio.service.FoodService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        this.foodService.createFood(foodData);
        return;
    }

    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = this.foodService.listFood().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) throws Exception{
        this.foodService.deleteFood(id);
        return ResponseEntity.noContent().build();
    }
}
