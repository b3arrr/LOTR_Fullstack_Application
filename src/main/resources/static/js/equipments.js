import {getEquipmentsById} from "./api.js";

export function loadEquipments(characterId) {
    $("#character-equipment-id").val(characterId);
    $("#equipment-list").empty();

        getEquipmentsById(characterId, (data) => {
        data.forEach(equipment => {
            $("#equipment-list").append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${equipment.name} - ${equipment.weight} (${equipment.description})</span>
                    <div>
                        <button class="btn btn-warning btn-sm edit-equipment" data-id="${equipment.id}" data-name="${equipment.name}" data-weight="${equipment.weight}" data-description="${equipment.description}" data-character-id="${equipment.character_id}">Edit</button>
                        <button class="btn btn-danger btn-sm delete-equipment" data-id="${equipment.id}">Delete</button>
                    </div>
                </li>
            `);
        });
    });

    $("#equipmentModal").modal("show");
}


export function toggleEquipmentFormButtons(isEditing) {
    $("#add-equipment").toggleClass("d-none", isEditing)
    $("#update-equipment").toggleClass("d-none", !isEditing)
    $("#cancel-equipment-edit").toggleClass("d-none", !isEditing)
}