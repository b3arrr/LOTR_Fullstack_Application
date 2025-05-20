import {loadCharacters, editCharacter, toggleCharacterFormButtons} from "./character.js";
import {
    createCharacter,
    createEquipment,
    deleteCharacter,
    updateCharacter,
    deleteEquipment,
    updateEquipment
} from "./api.js"
    import {loadEquipments, toggleEquipmentFormButtons} from "./equipments.js";

export function bindAllEvents () {

    $("#get-character").on("click", function() {
        loadCharacters();
    });

    $("#add-character").on("click", function() {
        createCharacter(loadCharacters);
    });

    //delete character
    $("#character-table").on("click", ".delete-character", function() {
       const id=$(this).closest("tr").data("id");
       deleteCharacter(id, loadCharacters)
    });

    //enables editing character
    $("#character-table").on("click", ".update-character", function() {
        const row = $(this).closest("tr");
        console.log("editing characters");
        toggleCharacterFormButtons(true);
        editCharacter(
            row.data("id"),
            row.data("name"),
            row.data("age"),
            row.data("race"),
            row.data("one_liner")
        );
    })

    $("#update-character").on("click", async function() {
        const id = $("#id").val();
        await updateCharacter(id);
        setTimeout(() => {
            loadCharacters();
        }, 200);

    })

    //Disables editing character
    $("#cancel-character-edit").on("click", function() {
        $("#character-form")[0].reset();
        $("#id").val("");
        toggleCharacterFormButtons(false);
    })

    //Opens up modal and loads
    $("#character-table").on("click", ".edit-enhancement", function() {
        const characterId = $(this).closest("tr").data("id");
        loadEquipments(characterId);
    })

    $("#add-equipment").on("click", function() {
        console.log("add equipment");
        createEquipment();
        const characterEquipmentId = $("#character-equipment-id").val();
        setTimeout(() => {
            loadEquipments(characterEquipmentId);
        }, 200);
    })

    $("#equipment-list").on("click", ".delete-equipment", function() {
        const id = $(this).data("id");
        const characterEquipmentId = $("#character-equipment-id").val();

        deleteEquipment(id);
        setTimeout(() => {
            loadEquipments(characterEquipmentId);
        }, 200);
    })

    $("#equipment-list").on("click", ".edit-equipment", function() {
        toggleEquipmentFormButtons(true);
        $("#equipment-id").val($(this).data("id"));
        $("#equipment-name").val($(this).data("name"));
        $("#equipment-weight").val($(this).data("weight"));
        $("#equipment-description").val($(this).data("description"));

    });

    $("#cancel-equipment-edit").on("click", function() {
        $("#equipment-form")[0].reset();
        $("#equipment-id").val("");
        toggleEquipmentFormButtons(false);
    });

    $("#update-equipment").on("click", function() {
        const equipmentId = $("#equipment-id").val();
        const characterEquipmentId = $("#character-equipment-id").val();

        updateEquipment(equipmentId);
        setTimeout(() => {
            loadEquipments(characterEquipmentId);
        }, 200);
        $("#equipment-form")[0].reset();
        $("#equipment-id").val("");
        toggleEquipmentFormButtons(false);
    })





}




