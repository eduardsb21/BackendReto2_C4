/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Reto2_C4.Reto2_C4.crudRepository;

import com.Reto2_C4.Reto2_C4.entity.Supplement;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author eduardsuarez21
 */
public interface SupplementCrudRepository extends MongoRepository<Supplement, String>{
    
    
}
