/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Reto2_C4.Reto2_C4.repository;

import com.Reto2_C4.Reto2_C4.crudRepository.UserCrudRepository;
import com.Reto2_C4.Reto2_C4.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author eduardsuarez21
 */
@Repository
public class UserRepository {
    @Autowired
    private UserCrudRepository crudRepository;

    public Optional<User> getUserId(int id) {
        return crudRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return crudRepository.findAll();
    }

    public boolean emailExists(String email) {
        Optional<User> usuario = crudRepository.findByEmail(email);

        return !usuario.isEmpty();
    }

    public Optional<User> autenticateUser(String email, String password) {
        return crudRepository.findByEmailAndPassword(email, password);
    }

    public User save(User user) {
        return crudRepository.save(user);
    }
    
    public User update(User user) {
        return crudRepository.save(user);
    }
    
    
    public void delete(User user) {
        crudRepository.delete(user);
    }
    
}
