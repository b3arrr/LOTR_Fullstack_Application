package com.example.lotr.models;

public class EquipmentModel {
    private int id;
    private String name;
    private int weight;
    private String description;
    private int character_id;

    public EquipmentModel(int id, String name, int weight, String description, int character_id ) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.description = description;
        this.character_id = character_id;
    }
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public int getWeight() {
        return weight;
    }
    public String getDescription() {
        return description;
    }
    public int getCharacter_id() {
        return character_id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setCharacter_id(int character_id) {
        this.character_id = character_id;
    }

}

