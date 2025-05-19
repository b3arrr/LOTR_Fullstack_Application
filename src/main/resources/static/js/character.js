import { getAllCharacters } from "./api.js"

export function loadCharacters() {
    console.log("all events is runnings2")
    getAllCharacters((data) => {
        const tableBody = $(".table-body")
        console.log(data.id)
        tableBody.empty()
        data.forEach(data => {
            const row =
                `<tr data-id=${data.id}>
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.race}</td>
                        <td>${data.one_liner}</td>
                        <td> <button type="button" class="btn btn-danger delete-character">Delete</button></td>
                    </tr>
                   `
            tableBody.append(row)
        });
    });
}