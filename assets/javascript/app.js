//this is basically a config file LOL

//make variables for apikeys
const giphyApiKey = "ica0VRIf5YVeCJA1gnkaaKbsoJcFltWN";
const omdbApoKey = "e8fe52ad";

//config variables
const ratings = "&rating=g&rating=pg&rating=pg-13";
const limit = 10;

//this is used for the more button on the giphy page to add more gif's to the page
let offset = 0;

//omdb config items 
let omdbTerms = ["frozen", "sing", "tommy boy", "hellboy", "core"];
let plot = "short";

//gif config items 
let gifTerms = ["chocolate","cake","pancake","bacon","steak","porkchop"];
let isGiphy = true;

let favoritesArr = [];

let lastQuery = "";

createGifPage();


document.getElementById("giphy-nav-button").addEventListener("click", function(){
    createGifPage();
})

document.getElementById("ombd=nav-button").addEventListener("click", function(){
    createOmdbHtmlPage();
})

document.getElementById("favorites-nav-button").addEventListener("click", function(){
    createFavoritesView();
})