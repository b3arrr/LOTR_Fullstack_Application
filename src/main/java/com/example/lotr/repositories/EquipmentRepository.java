
package com.example.lotr.repositories;
import com.example.lotr.models.EquipmentModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class EquipmentRepository {
    private final JdbcTemplate jdbcTemplate;

    public EquipmentRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    protected static final RowMapper<EquipmentModel>  equipmentRowMapper = (rs, rowNr) ->
        new EquipmentModel(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getInt("weight"),
                rs.getString("description"),
                rs.getInt("character_id")
        );

    //GET mapping
    public List<EquipmentModel> getAllEquipments() {
        String sql = "SELECT * FROM equipments;";
        return jdbcTemplate.query(sql, equipmentRowMapper);
    }
    public Optional<EquipmentModel> getEquipmentById(int id) {
        String sql = "SELECT * FROM equipments WHERE id = ?";
        Optional<EquipmentModel> equipment = jdbcTemplate.query(sql, equipmentRowMapper, id).stream().findFirst();
        return equipment;
    }
    //Get equipment that a character posesses
    public List<EquipmentModel> getEquipmentsByCharacterId(int id) {
        String sql = "SELECT * FROM equipments WHERE character_id = ?";
        return jdbcTemplate.query(sql, equipmentRowMapper, id);
    }
    //POST mapping
    public void createEquipment(EquipmentModel equipment) {
        String sql = "INSERT INTO equipments (name, weight, description, character_id) VALUES (?,?,?,?)";
        jdbcTemplate.update(sql, equipment.getName(), equipment.getWeight(), equipment.getDescription(), equipment.getCharacter_id());
    }

    //PUT mapping
    public int updateEquipment(int id, EquipmentModel equipment) {
        String sql = "UPDATE equipments SET name = ?, weight = ?, description = ?, character_id = ? WHERE id = ?";
        return jdbcTemplate.update(sql, equipment.getName(), equipment.getWeight(), equipment.getDescription(), equipment.getCharacter_id(), id);
    }
    public void deleteEquipment(int id) {
        String sql = "DELETE FROM equipments WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }




}
