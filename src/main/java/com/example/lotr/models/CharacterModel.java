package com.example.lotr.models;

import java.util.List;

public class CharacterModel {
    private int id;
    private String name;
    private int age;
    private String race;
    private String one_liner;
    private List<EquipmentModel> equipments;

    public CharacterModel(int id, String name, int age, String race, String one_liner, List<EquipmentModel> equipments ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.race = race;
        this.one_liner = one_liner;
        this.equipments = equipments;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public String getRace() {
        return race;
    }
    public String getOne_liner() {
        return one_liner;
    }
    public List<EquipmentModel> getEquipments() {
        return equipments;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public void setRace(String race) {
        this.race = race;
    }
    public void setOne_liner(String one_liner) {
        this.one_liner = one_liner;
    }
    public void setEquipments(List<EquipmentModel> equipments) {
        this.equipments = equipments;
    }

}
