
// -----------------------------------------------  Selectors

const searchButton = document.querySelector("#search");
const recipeCards = document.querySelector("#content");
const errorHandling = document.querySelector("#error-handling");

// ----------------------------------------------- Event Listeners

searchButton.addEventListener("click", () => {
    console.log('Button pressed')
    searchRecipe();
})

// ----------------------------------------------- Recipe


let appId = 'ba5b7a21',
    apiKey = 'd1d3afcdc37dd030c29294267aaedbc8';

// Function to get data from Edamam Recipe API

async function searchRecipe() {
    let searchValue = document.querySelector("#recipe-form__search-bar").value;
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        useApiData(data);
    })
    .catch(err => {
        errorHandling.innerHTML = "<p>Oops something went wrong, try again.</p>"
        console.log(err);
    });    
}

// Using the data

function useApiData(data) {
    let cardImage = data.hits[0].recipe.image
    let cardTitle = data.hits[0].recipe.label
    let aLink = data.hits[0].recipe.url

    recipeCards.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${cardImage}" class="card-img-top" alt="Recipe image">
            <div class="card-body">
                <h5 class="card-title">${cardTitle}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="${aLink}" target="_blank" class="btn btn-primary">See Recipe</a>
        </div>
    </div>
    `
}

