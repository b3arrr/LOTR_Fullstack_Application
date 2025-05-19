const baseUrl = "http://localhost:8080/api/characters"

const getInputs = () => {
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

export function getAllCharacters(callback) {
                //empties the tbody before appending all the characters
    fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));

}

export function createCharacter(callback) {

    const character = getInputs();
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

export function updateCharacter(id) {
    const character = getInputs();

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

