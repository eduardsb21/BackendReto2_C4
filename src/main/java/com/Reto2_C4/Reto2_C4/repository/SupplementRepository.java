/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Reto2_C4.Reto2_C4.repository;

import com.Reto2_C4.Reto2_C4.crudRepository.SupplementCrudRepository;
import com.Reto2_C4.Reto2_C4.entity.Supplement;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author eduardsuarez21
 */
@Repository
public class SupplementRepository {
    @Autowired
    private SupplementCrudRepository crudRepository;

    public List<Supplement> getAllSupplements() {
        return crudRepository.findAll();
    }

    public Optional<Supplement> getSupplement(String reference) {
        return crudRepository.findById(reference);
    }

    public Supplement save(Supplement clothe) {
        return crudRepository.save(clothe);
    }

    public void update(Supplement clothe) {
        crudRepository.save(clothe);
    }

    public void delete(Supplement clothe) {
        crudRepository.delete(clothe);
    }
    
}
