package com.example.lotr.RESTcontrollers;

import com.example.lotr.models.EquipmentModel;
import com.example.lotr.repositories.EquipmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {
    private final EquipmentRepository repository;

    public EquipmentController(EquipmentRepository repository) {
        this.repository = repository;
    }

    //GET mapping
    @GetMapping
    public List<EquipmentModel> getAllEquipments () {
        return repository.getAllEquipments();
    }

    @GetMapping("/{id}")
    public Optional<EquipmentModel> getEquipmentById(@PathVariable int id) {
        return repository.getEquipmentById(id);
    }
    @GetMapping( params = "characterId" )
    public List<EquipmentModel> getEquipmentsByCharacterId(@RequestParam int characterId) {
        return repository.getEquipmentsByCharacterId(characterId);
    }

    //POST mapping
    @PostMapping
    public ResponseEntity<String> createEquipment(@RequestBody EquipmentModel equipment) {
        repository.createEquipment(equipment);
        return ResponseEntity.ok("Equipment created");
    }

    //PUT mapping
    @PutMapping("/{id}")
    public ResponseEntity<String> updateEquipment(@PathVariable int id, @RequestBody EquipmentModel equipment) {
        int updatedRows = repository.updateEquipment(id, equipment);
        if (updatedRows > 0) {
            return ResponseEntity.ok("Equipment updated successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEquipment(@PathVariable int id) {
        repository.deleteEquipment(id);
        return ResponseEntity.ok("Equipment deleted");
    }


}
