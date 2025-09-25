package com.example.cardapio.controller;

import com.example.cardapio.DTO.FoodRequestDTO;
import com.example.cardapio.DTO.FoodResponseDTO;
import com.example.cardapio.entity.Food;
import com.example.cardapio.repository.FoodRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    private FoodRepository foodRepository;

    public FoodController(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        this.foodRepository.save(foodData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = this.foodRepository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
