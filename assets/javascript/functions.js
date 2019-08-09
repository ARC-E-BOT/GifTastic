//this is a functions file because I would like to separate the functions from the on page load code

function createButtons(arr, toAppendHTML){
    for(let i = 0; i<arr.length; i++){
        let button = document.createElement("button");
        button.textContent = arr[i];
        button.className = "buttons";
        button.setAttribute("query-term", arr[i]);
        createQueryButtonListener(button);
        toAppendHTML.appendChild(button);
    }
    return toAppendHTML;
}

function createQueryButtonListener(button){
    if (isGiphy) {
        button.addEventListener("click", function() {
            let searchTerm = this.getAttribute("query-term");
            searchGiphy(searchTerm);
        })
    } else {

    }
}

function searchGiphy(queryTerm){
    let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${queryTerm}&limit=${limit}${ratings}`
    fetch(queryUrl)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            const data = responseJson.data;
            for(let i = 0; i<data.length; i++){
                //make image div's
                const card = makeCards(data[i]);
                document.getElementById("content-container").appendChild(card);
            }
        })
}

function makeCards(data){
    const newDiv = document.createElement("div");
    newDiv.className = "img-content-container";
    newDiv.innerHTML = `<p class="img-title-text">Title: ${data.title}</p>`;
    const newImg = document.createElement("img");
    newImg.className = "img-gif";
    newImg.src = data.images.original_still.url;
    newImg.setAttribute("gif-still", data.images.original_still.url);
    newImg.setAttribute("gif-animated", data.images.original.url);
    newImg.setAttribute("status", "still");
    newImg.addEventListener("click", function(){
        const status = this.getAttribute("status");
        if (status === "still"){
            this.src = this.getAttribute("gif-animated");
            this.setAttribute("status", "animated")
        } else {
            this.src = this.getAttribute("gif-still");
            this.setAttribute("status", "still")
        }
    })
    newDiv.appendChild(newImg);
    const newerIshDiv = document.createElement("div");
    newerIshDiv.innerHTML = `
    <p class="img-stats">Rating: g</p>
    <p class="img-stats">Upload Date: g</p>
    <p class="img-stats">Link to gif page</p>
    <p class="img-stats">username: g</p>`;
    newDiv.appendChild(newerIshDiv);
    return newDiv;
}

/*
    <div class="img-content-container">
        <p class="img-title-text">Title: FLOOPIN</p>
        <img class="img-gif" src="https://media.giphy.com/media/cKW5nRbUXpOYAtSy2r/giphy.gif" alt="">
        <p class="img-stats">Rating: g</p>
        <p class="img-stats">Upload Date: g</p>
        <p class="img-stats">Link to gif page</p>
        <p class="img-stats">username: g</p>
    </div>
*/