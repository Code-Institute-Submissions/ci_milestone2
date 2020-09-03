
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


// Function to get value from checked checkbox. Code adapted from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order

function checkBoxDietLabel() {
    let checkBoxDiet = document.forms[0];
    let i;
    let checkBoxDietValue = ""
    let checkBoxDietValueArray = [];

    for (i = 0; i < checkBoxDiet.length; i++) {
        if (checkBoxDiet[i].checked) {
            // checkBoxDietValue = checkBoxDietValue + checkBoxDiet[i].value;
            checkBoxDietValueArray.push(checkBoxDiet[i].value);
        }
    }
    console.log(checkBoxDietValueArray);

    // Checking if there's any checkbox checked. If 1 return value, if 2 still have to work on 
    if (checkBoxDietValueArray.length === 0) {
        return ""
    }
    else if (checkBoxDietValueArray.length === 1) {
        return `&diet=${checkBoxDietValueArray[0]}`
    } else {
        console.log('more than one value ticked');
        //BUG
    }
}

// Function to get data from Edamam Recipe API

async function searchRecipe() {
    let searchValue = document.querySelector("#recipe-form__search-bar").value;
    let dietLabels = checkBoxDietLabel();
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=${searchValue}${dietLabels}`)
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
            <li class="list-group-item">Health labels: ${data.hits[i].recipe.healthLabels}
            </li>
        </ul>
        <a href="${data.hits[i].recipe.url}" target="_blank" class="btn btn-primary">See Recipe</a>
        </div>
    </div>
        `
    }

}

