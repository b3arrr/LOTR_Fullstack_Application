import {loadCharacters, editCharacter, toggleCharacterFormButtons} from "./character.js";
import {createCharacter, deleteCharacter, updateCharacter} from "./api.js";

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


}




