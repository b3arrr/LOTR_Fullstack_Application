package com.example.lotr.repositories;

import com.example.lotr.models.CharacterModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class CharacterRepository {
    private JdbcTemplate jdbcTemplate;

    public CharacterRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    protected static final RowMapper<CharacterModel> characterModelRowMapper = (rs, rowNum) ->
        new CharacterModel(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getInt("age"),
                rs.getString("race"),
                rs.getString("one_liner"),
                new ArrayList<>()

        );

    //Get commands
    public List<CharacterModel> getAllCharacters() {
        String sql = "SELECT * FROM character;";
        return jdbcTemplate.query(sql, characterModelRowMapper);
    }
    public Optional<CharacterModel> getCharacterById(int id) {
        String sql = "SELECT * FROM character WHERE id = ?";
        Optional<CharacterModel> character = jdbcTemplate.query(sql, characterModelRowMapper, id).stream().findFirst() ;
        return character;
    }
    //Create command
    public void createCharacter(CharacterModel character) {
        String sql = "INSERT INTO character (name, age, race, one_liner) VALUES (?,?,?,?)";
        jdbcTemplate.update(sql, character.getName(), character.getAge(), character.getRace(), character.getOne_liner());

    }
    //Update
    public int updateCharacter(int id, CharacterModel character) {
        String sql = "UPDATE character SET name = ?, age = ?, race = ?, one_liner = ? WHERE id = ?";
        return jdbcTemplate.update(sql, character.getName(), character.getAge(), character.getRace(), character.getOne_liner(), id);
    }

    //Delete
    public void deleteCharacter(int id) {
        String sql = "DELETE FROM character WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }





}
