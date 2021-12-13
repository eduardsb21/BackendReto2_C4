/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Reto2_C4.Reto2_C4.service;

import com.Reto2_C4.Reto2_C4.entity.User;
import com.Reto2_C4.Reto2_C4.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eduardsuarez21
 */
@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    
    public Optional<User> getUser(int id) {
        return repository.getUserId(id);
    }

    public List<User> getAllUsers() {
        return repository.getAllUsers();
    }

    public boolean emailExists(String email) {
        return repository.emailExists(email);
    }

    public User autenticateUser(String email, String password) {
        Optional<User> usuario = repository.autenticateUser(email, password);

        if (usuario.isEmpty()) {
            return new User();
        } else {
            return usuario.get();
        }
    }

    public User save(User user) {
        if (user.getId() == null) {
            return user;
        } else {
            Optional<User> e = repository.getUserId(user.getId());
            if (e.isEmpty()) {
                if (emailExists(user.getEmail()) == false) {
                    return repository.save(user);
                } else {
                    return user;
                }
            } else {
                return user;
            }
        }
    }

    public User update(User user) {

        if (user.getId() != null) {
            Optional<User> userDb = repository.getUserId(user.getId());
            if (!userDb.isEmpty()) {
                if (user.getIdentification() != null) {
                    userDb.get().setIdentification(user.getIdentification());
                }
                if (user.getName() != null) {
                    userDb.get().setName(user.getName());
                }
                if (user.getAddress() != null) {
                    userDb.get().setAddress(user.getAddress());
                }
                if (user.getCellPhone() != null) {
                    userDb.get().setCellPhone(user.getCellPhone());
                }
                if (user.getEmail() != null) {
                    userDb.get().setEmail(user.getEmail());
                }
                if (user.getPassword() != null) {
                    userDb.get().setPassword(user.getPassword());
                }
                if (user.getZone() != null) {
                    userDb.get().setZone(user.getZone());
                }

                repository.update(userDb.get());
                return userDb.get();
            } else {
                return user;
            }
        } else {
            return user;
        }
    }

    public boolean delete(int userId) {
        Optional<User> usuario = getUser(userId);
        
        if (usuario.isEmpty()){
            return false;
        }else{
            repository.delete(usuario.get());
            return true;
        }
        /*
        Boolean aBoolean = getUser(userId).map(user -> {
            repositorio.delete(user);
            return true;
        }).orElse(false);
        return aBoolean;

        */
    }
    
}
