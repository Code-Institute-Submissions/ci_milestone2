
// -----------------------------------------------  Selectors
const searchButton = document.querySelector("#search");
const recipeCards = document.querySelector("#recipe-cards__main");
const errorHandling = document.querySelector("#error-handling");
const clearIcon = document.querySelector("#recipe-form__clear-icon");
const searchBar = document.querySelector("#recipe-form__search-bar");
const recipeCardsInspiration = document.querySelectorAll("#recipe-cards__inspiration");


// ----------------------------------------------- Event Listeners
searchButton.addEventListener("click", () => {
    console.log('Button pressed')
    recipeAPI();
});

//Event listeners taken from https://www.mikedane.com/web-development/css/styling-search-bar/
searchBar.addEventListener("keyup", () => {
    if (searchBar.value && clearIcon.style.visibility != "visible") {
        clearIcon.style.visibility = "visible";
    } else if (!searchBar.value) {
        clearIcon.style.visibility = "hidden";
    }
});

clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
});

// ----------------------------------------------- Recipe API
let appId = 'ba5b7a21',
    apiKey = 'd1d3afcdc37dd030c29294267aaedbc8';


// Function to get value from checked checkbox. 
function checkboxDietLabel() {
    let checkboxDiet = document.forms[0];
    let i;
    let checkboxDietValueArray = [];

    //For loop adapted from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order
    for (i = 0; i < checkboxDiet.length; i++) {
        if (checkboxDiet[i].checked) {
            checkboxDietValueArray.push(checkboxDiet[i].value);
        }
    }
    console.log(checkboxDietValueArray);

    // Checking if there's any checkbox checked. If yes, append values to the API URL.
    if (checkboxDietValueArray.length === 0) {
        return "";
    }
    else if (checkboxDietValueArray.length === 1) {
        return `&diet=${checkboxDietValueArray[0]}`;
    } else {
        let checkboxDietValue = ""
        for (let j = 0; j < checkboxDietValueArray.length; j++) {
            checkboxDietValue += `&diet=${checkboxDietValueArray[j]}`
        }
        return checkboxDietValue;
    }
}

// Get data from Recipe API
async function recipeAPI() {
    let searchValue = document.querySelector("#recipe-form__search-bar").value;
    let dietLabels = checkboxDietLabel();
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=${searchValue}${dietLabels}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataSearchBar(data);
        })
        .catch(err => {
            errorHandling.innerHTML = "<p>Oops something went wrong, try again.</p>"
            console.log(err);
        });
}

// Recipe API data for main section - search bar
function recipeAPIDataSearchBar(data) {
    for (let i = 0; i < 8; i++) {
        recipeCards.innerHTML += `
    <div class="col-12 col-md-6 col-xl-3 col-lg-3">
        <div class="card">
        <img src="${data.hits[i].recipe.image}"
            class="card-img-top" alt="Recipe image">
        <div class="card-body">
            <h5 class="card-title" id="card-title">${data.hits[i].recipe.label}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Calories: ${parseInt(data.hits[i].recipe.calories)}</li>
            <li class="list-group-item">Ingredients used: ${data.hits[i].recipe.ingredients.length}</li>
            <li class="list-group-item">Health labels: ${data.hits[i].recipe.healthLabels}</li>
            <li class="list-group-item">Diet labels: ${data.hits[i].recipe.dietLabels}</li>
        </ul>
        <a href="${data.hits[i].recipe.url}" target="_blank" class="btn btn-primary">See Recipe</a>
        </div>
    </div>
        `
    };
}


// Get data from Recipe API for inspiration section
async function recipeAPIInspiration() {
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=&health=immuno-supportive`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataInspiration(data);
        })
        .catch(err => {
            errorHandling.innerHTML = "<p>Oops something went wrong, please reload the page.</p>"
            console.log(err);
        });
}

// Recipe API data for inspiration section

function recipeAPIDataInspiration(data) {
    for (let i = 0; i < 10; i++) {
        recipeCardsInspiration[i].innerHTML += `
        <div class="col-12 col-md-6 col-xl-3 col-lg-3">
        <div class="inspiration-container__card">
            <img src="${data.hits[i].recipe.image}"
                class="card-img-top" alt="Recipe image">
            <h5>${data.hits[i].recipe.label}</h5>
            <a href="${data.hits[i].recipe.url}"
                target="_blank">SEE RECIPE</a>
        </div>
    </div>
        `
    };
}