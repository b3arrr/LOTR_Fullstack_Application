import {loadCharacters} from "./character.js";
import {createCharacter, deleteCharacter} from "./api.js";

export function bindAllEvents () {

    $("#get-character").on("click", function() {
        loadCharacters();
    });

    $("#add-character").on("click", function() {
        createCharacter(loadCharacters);
    });

    $("#character-table").on("click", ".delete-character", function() {
       const id=$(this).closest("tr").data("id");
       deleteCharacter(id, loadCharacters)
    });
}




