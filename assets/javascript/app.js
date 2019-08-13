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
let omdbTerms = ["frozen", "sing", "tommy boy", "hellboy", "the core"];
let plot = "short";

//gif config items 
let gifTerms = ["chocolate","cake","pancake","bacon","steak","porkchop"];
let isGiphy = true;

let favoritesArr = [];

let lastQuery = "";

//get the data for the page and if not set the data for the page 
getLists();

//when the giphy nav button is pressed
document.getElementById("giphy-nav-button").addEventListener("click", function(){
    //set the classlist of all of the buttons back to default except the giphy button add navButton-clicked to the button so it appears clicked
    document.getElementById("giphy-nav-button").classList = "navButton borderRight navButton-clicked";
    document.getElementById("ombd-nav-button").classList = "navButton borderRight";
    document.getElementById("favorites-nav-button").classList = "navButton";
    //create the gif view 
    createGifPage();
})

document.getElementById("ombd-nav-button").addEventListener("click", function(){
    //set the classlist of all of the buttons back to default except the ombd button add navButton-clicked to the button so it appears clicked
    document.getElementById("giphy-nav-button").classList = "navButton borderRight";
    document.getElementById("ombd-nav-button").classList = "navButton borderRight navButton-clicked";
    document.getElementById("favorites-nav-button").classList = "navButton";
    //create the ombd view on the page
    createOmdbHtmlPage();
})

document.getElementById("favorites-nav-button").addEventListener("click", function(){
    //set the classlist of all of the buttons back to default except the favorites button add navButton-clicked to the button so it appears clicked
    document.getElementById("giphy-nav-button").classList = "navButton borderRight";
    document.getElementById("ombd-nav-button").classList = "navButton borderRight";
    document.getElementById("favorites-nav-button").classList = "navButton navButton-clicked";
    //create the favorites view on the page
    createFavoritesView();
})

function getLists(){
    localforage.getItem("data").then(function(value){
        omdbTerms = value.omdbTerms;
        gifTerms = value.gifTerms;
        favoritesArr = value.favoritesArr;
        console.log(value)
        //create the gif page as the default view on page load
        createGifPage();
    }).catch(function(err){
        setLists();
        //create the gif page as the default view on page load
        createGifPage();
    })
}

function setLists(){
    localforage.setItem("data", {
        omdbTerms: omdbTerms,
        gifTerms: gifTerms,
        favoritesArr: favoritesArr
    });
}