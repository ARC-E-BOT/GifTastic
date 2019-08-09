const giphyApiKey = "ica0VRIf5YVeCJA1gnkaaKbsoJcFltWN";
const ratings = "&rating=g&rating=pg&rating=pg-13";
const limit = 10;
let offest = 0;

let testing = ["halo", "boot", "floopin"];
let isGiphy = true;

createButtons(testing, document.getElementById("button-container"));