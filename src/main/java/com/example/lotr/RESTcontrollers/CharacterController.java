package com.example.lotr.RESTcontrollers;

import com.example.lotr.models.CharacterModel;
import com.example.lotr.repositories.CharacterRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {
   private final CharacterRepository repository;

    public CharacterController(CharacterRepository repository) {
        this.repository = repository;
    }
    //GET
    @GetMapping()
    public List<CharacterModel> getAllCharacters() {
        return repository.getAllCharacters();
    }
    @GetMapping("/{id}")
    public ResponseEntity<CharacterModel> getCharacterById(@PathVariable int id) {
        Optional<CharacterModel> character = repository.getCharacterById(id);
     /*   character.ifPresent(c ->

                )*/
        return character.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    //POST
    @PostMapping
    public ResponseEntity<String> addCharacter(@RequestBody CharacterModel character) {
        repository.createCharacter(character);
        return ResponseEntity.ok("Character updated");
    }

    //PUT
    @PutMapping("/{id}")
    public ResponseEntity<String> updateCharacter(@PathVariable int id, @RequestBody CharacterModel character) {
        int updatedRows = repository.updateCharacter(id, character);
        if (updatedRows > 0) {
            return ResponseEntity.ok("Cyborg updated successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    //DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCharacter(@PathVariable int id) {
        repository.deleteCharacter(id);
        return ResponseEntity.ok("Character deleted");
    }


}

