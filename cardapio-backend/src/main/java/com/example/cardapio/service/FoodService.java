package com.example.cardapio.service;

import org.springframework.stereotype.Service; 
import com.example.cardapio.repository.FoodRepository;
import com.example.cardapio.DTO.FoodResponseDTO;
import com.example.cardapio.DTO.FoodRequestDTO;
import com.example.cardapio.entity.Food;
import com.example.cardapio.mapper.FoodMapper;

import java.util.List;  
import org.springframework.transaction.annotation.Transactional;

@Service
public class FoodService implements BaseService<FoodResponseDTO, FoodRequestDTO, Long> {
    
    private final FoodRepository foodRepository;
    private final FoodMapper mapper = new FoodMapper();


    public FoodService(FoodRepository foodRepository){
        this.foodRepository = foodRepository;
    }
    
    @Transactional
    @Override
    public FoodResponseDTO save(FoodRequestDTO obj) {
        Food food = this.foodRepository.save(this.mapper.toEntity(obj));
        return this.mapper.toDTO(food);
    }

    @Transactional
    @Override
    public void delete(Long id){
        this.foodRepository.deleteById(id);
    }

    @Override
    public FoodResponseDTO update(Long primaryKey, FoodRequestDTO obj) {
        Food foodUpdated = this.foodRepository.findById(primaryKey).orElseThrow(RuntimeException::new);

        if(obj.title() != null) foodUpdated.setTitle(obj.title());
        if(obj.image() != null) foodUpdated.setImage(obj.image());
        if(obj.price() != null) foodUpdated.setPrice(obj.price());
        Food food = this.foodRepository.save(foodUpdated);
        return this.mapper.toDTO(food);
    }

    @Override
    public FoodResponseDTO getById(Long id) {
        Food food = this.foodRepository.findById(id).orElseThrow(RuntimeException::new);

        return this.mapper.toDTO(food);
    }

    @Override
    public List<FoodResponseDTO> getAll() {
        List<Food> foodList = this.foodRepository.findAll();
        return foodList.stream().map(this.mapper::toDTO).toList();
    }
}
