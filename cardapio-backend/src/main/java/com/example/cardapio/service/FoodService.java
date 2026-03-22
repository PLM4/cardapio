package com.example.cardapio.service;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service; 
import com.example.cardapio.repository.FoodRepository; 
import com.example.cardapio.entity.Food; 
import java.util.List;  

@Service
public class FoodService {
    
    private final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository){
        this.foodRepository = foodRepository;
    }
    
    public void createFood(@NonNull Food food){
        this.foodRepository.save(food);
    }

    public List<Food> listFood(){
        return this.foodRepository.findAll();
    }  

    public void deleteFood(@NonNull Long id) throws Exception{
        if(!this.foodRepository.existsById(id)){
            throw new Exception("Id inválido");
        }
        this.foodRepository.deleteById(id);
    }
}
