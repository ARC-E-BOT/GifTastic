//this is basically a config file LOL

//make variables for apikeys
const giphyApiKey = "ica0VRIf5YVeCJA1gnkaaKbsoJcFltWN";

//config variables
const ratings = "&rating=g&rating=pg&rating=pg-13";
const limit = 10;

//this is used for the more button on the giphy page to add more gif's to the page
let offset = 0;

let gifTerms = ["chocolate","cake","pancake","bacon","steak","porkchop"];
let isGiphy = true;

let lastQuery = "";

createGifPage();