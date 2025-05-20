const baseUrl = "http://localhost:8080/api/characters";
const equipmentBaseUrl = "http://localhost:8080/api/equipment";


const getInputsCharacter = () => {
    const name = $("#name").val();          //could do const name = document.getElementById("name").value;
    const age = $("#age").val();
    const race = $("#race").val();
    const one_liner = $("#one-liner").val();
    return {
        name: name,
        age: age,
        race: race,
        one_liner: one_liner,
    };
}
const getInputsEquipment = () => {
    const name = $("#equipment-name").val();          //could do const name = document.getElementById("name").value;
    const weight = $("#equipment-weight").val();
    const description = $("#equipment-description").val();
    const character_id = $("#character-equipment-id").val();
    return {
        name: name,
        weight: weight,
        description: description,
        character_id: character_id
    };
}

//Character CRUD
//GET
export function getAllCharacters(callback) {
    fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));

}

//CREATE
export function createCharacter(callback) {

    const character = getInputsCharacter();
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(character)
    })
        .then(response => response.text())
        .then(data => callback(data))
        .catch(error => console.log(error));

}

//UPDATE
export function updateCharacter(id) {
    const character = getInputsCharacter();

    fetch(baseUrl + "/" + id, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(character)
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
//DELETE
export function deleteCharacter(id, callback) {
    fetch(baseUrl + "/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.text())
        .then(data => callback(data))
        .catch(error => console.log(error))
}

// Equipments CRUD

export function getEquipmentsById(characterId, callback) {
    // $.get(`${equipmentBaseUrl}?characterId=${characterId}`, callback);
    const url = `${equipmentBaseUrl}?characterId=${characterId}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse JSON hvis forventet respons er JSON
        })
        .then(data => {
            callback(data); // Kall tilbake med dataene
        })
        .catch(error => {
            console.error('Error fetching equipment:', error);
        });
}

export function createEquipment() {
    const equipment = getInputsEquipment();
    fetch(equipmentBaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipment)
    })
        .then(response => response.text())
}


export function updateEquipment(id) {
    const equipment = getInputsEquipment();
    fetch(equipmentBaseUrl + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(equipment)
    })
}
export function deleteEquipment(id) {
    fetch(equipmentBaseUrl + "/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}