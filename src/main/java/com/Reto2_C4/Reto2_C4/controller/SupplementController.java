/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Reto2_C4.Reto2_C4.controller;

import com.Reto2_C4.Reto2_C4.entity.Supplement;
import com.Reto2_C4.Reto2_C4.service.SupplementService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author eduardsuarez21
 */
@RestController
@RequestMapping("/api/supplements")
@CrossOrigin("*")
public class SupplementController {
    @Autowired
    private SupplementService servicio;

    @GetMapping("/all")
    public List<Supplement> findAllSupplements() {
        return servicio.getAllSuplements();
    }

    @GetMapping("/{reference}")
    public Optional<Supplement> getSupplementId(@PathVariable("reference") String reference) {
        return servicio.getSupplementId(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Supplement save(@RequestBody Supplement gadget) {
        return servicio.save(gadget);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Supplement update(@RequestBody Supplement gadget) {
        return servicio.update(gadget);
    }

    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return servicio.delete(reference);
    }
    
}
