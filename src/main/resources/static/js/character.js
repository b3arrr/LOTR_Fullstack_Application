import { getAllCharacters } from "./api.js"

export function loadCharacters() {
    console.log("all events is runnings2")
    getAllCharacters((data) => {
        const tableBody = $(".table-body")
        tableBody.empty()
        data.forEach(data => {
            const row =
                `<tr data-id=${data.id} data-name="${data.name}" data-age="${data.age}" data-race="${data.race}" data-one_liner="${data.one_liner}">
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.race}</td>
                        <td>${data.one_liner}</td>
                        <td> <button type="button" class="btn btn-danger delete-character">Delete</button></td>
                        <td> <button type="button" class="btn btn-light edit-enhancement">Edit</button></td>
                        <td> <button type="button" class="btn btn-success update-character">Update</button></td>
                        
                    </tr>
                   `
            tableBody.append(row)
        });
    });
}

export function editCharacter(id, name, age, race, one_liner) {
    $("#id").val(id)
    $("#name").val(name)
    $("#age").val(age)
    $("#race").val(race)
    $("#one_liner").val(one_liner)
}

export function toggleCharacterFormButtons(isEditing) {
    $("#add-character").toggleClass("d-none", isEditing)
    $("#update-character").toggleClass("d-none", !isEditing)
    $("#cancel-character-edit").toggleClass("d-none", !isEditing)
}