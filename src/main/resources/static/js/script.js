import {bindAllEvents} from "./events.js";
import {loadCharacters} from "./character.js";

$(document).ready(function () {
    bindAllEvents();
    loadCharacters();
})