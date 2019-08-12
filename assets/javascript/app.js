//this is basically a config file LOL

const giphyApiKey = "ica0VRIf5YVeCJA1gnkaaKbsoJcFltWN";
const ratings = "&rating=g&rating=pg&rating=pg-13";
const limit = 10;
let offset = 0;

let gifTerms = ["chocolate","cake","pancake","bacon","steak","porkchop"];
let isGiphy = true;

let lastQuery = "";

createGifPage();