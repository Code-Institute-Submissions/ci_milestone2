//
// ----------- Main Section - Search bar
//

//Selectors
const searchButton = document.querySelector("#search");
const recipeCards = document.querySelector("#recipe-cards__main");
const errorHandling = document.querySelector("#main-container__error-handling");
const clearIcon = document.querySelector("#recipe-form__clear-icon");
const searchBar = document.querySelector("#recipe-form__search-bar");

//Event listeners
searchBar.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        //preventDefault to stop reloading page when event is fired
        e.preventDefault();
        getRecipeAPI();
    }
});

searchButton.addEventListener("click", () => {
    getRecipeAPI();
});

//Event listeners for the clear icon to be visible in the search bar. Source: https://www.mikedane.com/web-development/css/styling-search-bar/
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

// Get value from ticked checkbox
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

    // Check if any checkbox ticked
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

// Get data from Recipe API: Search bar
function getRecipeAPI() {
    let searchValue = searchBar.value;
    let dietLabels = checkboxDietLabel();
    let response = fetch(`https://api.edamam.com/search?app_id=ba5b7a21&app_key=d1d3afcdc37dd030c29294267aaedbc8&q=${searchValue}${dietLabels}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataSearchBar(data);
        })
        .catch(err => {
            recipeCards.innerHTML = "";
            errorHandling.innerHTML = `
            <div class="container error-handling">
                <div class="row">
                    <div class="col">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Ops something went wrong, please change the search term and try again.</p>
                    </div>
                </div>
            </div>`
            console.log(err);
        });
}

// Recipe API data: Search bar
function recipeAPIDataSearchBar(data) {
    if (typeof (data.hits[0].recipe) != undefined) {

        //Clear results once new search is performed.
        recipeCards.innerHTML = "";
        //Clear error message in case it has been displayed before.
        errorHandling.innerHTML = "";

        for (let i = 0; i < 8; i++) {
            //Print health labels in pills
            let healthLabels = data.hits[i].recipe.healthLabels;
            let healthLabelsPillsHTML = "";
            for (let i = 0; i < healthLabels.length; i++) {
                healthLabelsPillsHTML += `<span class="badge badge-pill badge-success">${healthLabels[i]}</span>`
            }
            recipeCards.innerHTML += `
            <div class="col-12 col-md-6 col-xl-4 col-lg-4">
                <div class="card card__main">
                <img src="${data.hits[i].recipe.image}"
                    class="card-img-top" alt="Recipe image" tabindex="0">
                <div class="card-body">
                    <h5 class="card-title card__title">${data.hits[i].recipe.label}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span>Calories: </span>${parseInt(data.hits[i].recipe.calories)}</li>
                    <li class="list-group-item"><span>Ingredients used: </span>${data.hits[i].recipe.ingredients.length}</li>
                    <li class="list-group-item li-health-labels"><span>Health labels: </span>${healthLabelsPillsHTML}</li>
                </ul>
                <a href="${data.hits[i].recipe.url}" target="_blank" class="btn btn-primary" rel="noopener" tabindex="0">See Recipe</a>
                </div>
            </div>
                `
        }
    }
    else {
        recipeCards.innerHTML = "";
        errorHandling.innerHTML =
            `<div class="container error-handling" tabindex="0">
            <div class="row">
                <div class="col">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Ops something went wrong, please change the search term or the filters and try again.</p>
                </div>
            </div>
        </div>`
    }
}

//
// ----------- Inspiration Section
//

//Selectors
const recipeCardsImmunity = document.querySelectorAll(".recipe-cards__immunity");
const recipeCardsImmunityError = document.querySelector("#immuno-supportive-recipes__error-handling");
const recipeCardsBalanced = document.querySelectorAll(".recipe-cards__balanced");
const recipeCardsBalancedError = document.querySelector("#balanced-recipes__error-handling");
const recipeCardsVeggie = document.querySelectorAll(".recipe-cards__veggie");
const recipeCardsVeggieError = document.querySelector("#veggie-recipes__error-handling");

//Get data from Recipe API: Imunno Supportive filter
function recipeAPIImmunity() {
    let response = fetch(`https://api.edamam.com/search?app_id=ba5b7a21&app_key=d1d3afcdc37dd030c29294267aaedbc8&q=&health=immuno-supportive&calories=300-1000`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataImmunity(data);
        })
        .catch(err => {
            recipeCardsImmunityError.innerHTML = `
            <div class="container error-handling" tabindex="0">
                <div class="row">
                    <div class="col">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Ops something went wrong, please reload the page.</p>
                    </div>
                </div>
            </div>`
            console.log(err);
        });
}

// Recipe API data: Imunno Supportive filter
function recipeAPIDataImmunity(data) {
    for (let i = 0; i < 10; i++) {
        recipeCardsImmunity[i].innerHTML += `
        <div class="card inspiration-container__card">
            <div class="card-body">
                <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="Recipe image" tabindex="0">
                <h5>${data.hits[i].recipe.label}</h5>
                <a href="${data.hits[i].recipe.url}" target="_blank" rel="noopener" tabindex="0">SEE RECIPE</a>
            </div>
        </div>`
    };
}

// Get data from Recipe API: Balanced filter
async function recipeAPIBalanced() {
    let response = await fetch(`https://api.edamam.com/search?app_id=ba5b7a21&app_key=d1d3afcdc37dd030c29294267aaedbc8&q=&diet=balanced&calories=400-2000`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataBalanced(data);
        })
        .catch(err => {
            recipeCardsBalancedError.innerHTML = `
            <div class="container error-handling">
                <div class="row" tabindex="0">
                    <div class="col">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Ops something went wrong, please reload the page.</p>
                    </div>
                </div>
            </div>`
            console.log(err);
        });
}

// Recipe API data: Well Balanced filter
function recipeAPIDataBalanced(data) {
    for (let i = 0; i < 10; i++) {
        recipeCardsBalanced[i].innerHTML += `
         <div class="card inspiration-container__card">
            <div class="card-body">
                <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="Recipe image" tabindex="0">
                <h5>${data.hits[i].recipe.label}</h5>
                <a href="${data.hits[i].recipe.url}" target="_blank" rel="noopener" tabindex="0">SEE RECIPE</a>
            </div>
        </div>
        `
    };
}

// Get data from Recipe API: Veggie filter
async function recipeAPIVeggie() {
    let response = await fetch(`https://api.edamam.com/search?app_id=ba5b7a21&app_key=d1d3afcdc37dd030c29294267aaedbc8&q=&health=vegetarian`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recipeAPIDataVeggie(data);
        })
        .catch(err => {
            recipeCardsVeggieError.innerHTML = `
            <div class="container error-handling" tabindex="0">
                <div class="row">
                    <div class="col">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Ops something went wrong, please reload the page.</p>
                    </div>
                </div>
            </div>`
            console.log(err);
        });
}

// Recipe API data: Veggie filter
function recipeAPIDataVeggie(data) {
    for (let i = 0; i < 10; i++) {
        recipeCardsVeggie[i].innerHTML += `
        <div class="card inspiration-container__card">
            <div class="card-body">
                <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="Recipe image" tabindex="0">
                <h5>${data.hits[i].recipe.label}</h5>
                <a href="${data.hits[i].recipe.url}" target="_blank" rel="noopener" tabindex="0">SEE RECIPE</a>
            </div>
        </div>
        `
    };
}

//
// ----------- Nutritional Info Section
//

//Selectors
const searchButtonNutrition = document.querySelector("#nutrition-container__search-button");
const textAreaNutrition = document.querySelector("#nutrition-container__label");
const nutritionalInfoPerIngr = document.querySelector("#nutrition-container__ingredient-table");
const nutritionalInfoTable = document.querySelector("#nutrition-container__nutrition-table");
const nutritionalInfoError = document.querySelector("#nutrition-container__error-handling");
const nutritionalInfoPerIngrError = document.querySelector("#nutrition-table__error-handling");
const nutritionalInfoContent = document.getElementById("nutrition-container__tables");

//Event listener
searchButtonNutrition.addEventListener("click", () => {
    getNutritionalInfoAPI();
});

//Nutritional info API call
function getNutritionalInfoAPI() {
    let arr = {
        "ingr": textAreaNutrition.value.split(/\n|\r/)
    };
    fetch('https://api.edamam.com/api/nutrition-details?app_id=57fbc896&app_key=83257937fbf237c98e94e34056ea7388', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arr)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nutritionalInfoAPIData(data);
        })
        .catch(err => {
            nutritionalInfoContent.style.display = "none";
            nutritionalInfoError.innerHTML = `
            <div class="container error-handling" tabindex="0">
                <div class="row">
                    <div class="col">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Sorry we couldn't analyse this recipe. Please check the ingredient spelling and make sure you have entered a quantity for the ingredients.</p>
                    </div>
                </div>
            </div>`
            console.log(err);
        });
}

//Content inside the following function was taken from https://developer.edamam.com/edamam-nutrition-api-demo, with adaptations (removed jquery).
function nutritionalInfoAPIData(data) {
    let quantity, measure, weight, foodMatch, unit;
    let totalCal, FAT, totalDailyFAT, FASAT, totalDailyFASAT, FATRN, CHOLE, totalDailyCHOLE, NA, totalDailyNA, CHOCDF, totalDailyCHOCDF, FIBTG, totalDailyFIBTG, SUGAR, SUGARadded, PROCNT, totalDailyPROCNT, VITD, totalDailyVITD, CA, totalDailyCA, FE, totalDailyFE, K, totalDailyK, err, table;
    //Line added to clear results once new search is performed.
    nutritionalInfoPerIngr.innerHTML = "";
    nutritionalInfoTable.innerHTML = "";

    //Display div that will hold the content returned by the Nutrition API 
    nutritionalInfoContent.style.display = "block";

    //Calories per ingredient
    let html = `<div class="table table-hover" tabindex="0">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Unit</th>
                                <th>Food</th>
                                <th>Calories</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                <tbody></div>`;
    if (data.ingredients != "") {
        for (let i = 0; i < data.ingredients.length; i++) {
            if (typeof (data.ingredients[i].parsed) != "undefined") {
                if (typeof (data.ingredients[i].parsed[0].quantity) != "undefined") {
                    quantity = data.ingredients[i].parsed[0].quantity;
                    console.log(quantity);
                } else { quantity = '-' };
                if (typeof (data.ingredients[i].parsed[0].measure) != "undefined") {
                    measure = data.ingredients[i].parsed[0].measure;
                    console.log(measure);
                } else { measure = '-' };
                if (typeof (data.ingredients[i].parsed[0].foodMatch) != "undefined") {
                    foodMatch = data.ingredients[i].parsed[0].foodMatch;
                    console.log(foodMatch);
                } else { foodMatch = '-' };
                if (typeof (data.ingredients[i].parsed[0].weight) != "undefined") {
                    weight = data.ingredients[i].parsed[0].weight;
                    console.log(weight);
                } else { weight = '-' };
                if (typeof (data.ingredients[i].parsed[0].nutrients.ENERC_KCAL) != "undefined") {
                    cal = data.ingredients[i].parsed[0].nutrients.ENERC_KCAL.quantity;
                    console.log(cal);
                    unit = data.ingredients[i].parsed[0].nutrients.ENERC_KCAL.unit;
                    console.log(unit);
                } else { cal = '-' };

                html += `<tr>
                             <th>${quantity}</th>
                             <th>${measure}</th>
                             <th>${foodMatch}</th>
                             <th>${Math.round(cal * 10) / 10} ${unit}</th>
                             <th>${Math.round(weight * 10) / 10} g</th>
                          </tr>`;
            } else {
                nutritionalInfoPerIngrError.innerHTML = `
                <div class="container error-handling" tabindex="0">
                    <div class="row">
                        <div class="col">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling and make sure you have entered a quantity for the ingredients.</p>
                        </div>
                    </div>
                </div>`
            }
        }
    }

    //Nutritional facts table
    if (typeof (data.totalNutrients.ENERC_KCAL) != "undefined") {
        totalCal = Math.round(data.totalNutrients.ENERC_KCAL.quantity);
    } else { totalCal = '0' };

    if (typeof (data.totalNutrients.FAT) != "undefined") {
        FAT = Math.round(data.totalNutrients.FAT.quantity * 10) / 10 + ' ' + data.totalNutrients.FAT.unit;
    } else { FAT = '-' };
    if (typeof (data.totalDaily.FAT) != "undefined") {
        totalDailyFAT = Math.round(data.totalDaily.FAT.quantity) + ' ' + data.totalDaily.FAT.unit;
    } else { totalDailyFAT = '-' };

    if (typeof (data.totalNutrients.FASAT) != "undefined") {
        FASAT = Math.round(data.totalNutrients.FASAT.quantity * 10) / 10 + ' ' + data.totalNutrients.FASAT.unit;
    } else { FASAT = '-' };
    if (typeof (data.totalDaily.FASAT) != "undefined") {
        totalDailyFASAT = Math.round(data.totalDaily.FASAT.quantity) + ' ' + data.totalDaily.FASAT.unit;
    } else { totalDailyFASAT = '-' };

    if (typeof (data.totalNutrients.FATRN) != "undefined") {
        FATRN = Math.round(data.totalNutrients.FATRN.quantity * 10) / 10 + ' ' + data.totalNutrients.FATRN.unit;
    } else { FATRN = '-' };

    if (typeof (data.totalNutrients.CHOLE) != "undefined") {
        CHOLE = Math.round(data.totalNutrients.CHOLE.quantity * 10) / 10 + ' ' + data.totalNutrients.CHOLE.unit;
    } else { CHOLE = '-' };
    if (typeof (data.totalDaily.CHOLE) != "undefined") {
        totalDailyCHOLE = Math.round(data.totalDaily.CHOLE.quantity) + ' ' + data.totalDaily.CHOLE.unit;
    } else { totalDailyCHOLE = '-' };

    if (typeof (data.totalNutrients.NA) != "undefined") {
        NA = Math.round(data.totalNutrients.NA.quantity * 10) / 10 + ' ' + data.totalNutrients.NA.unit;
    } else { NA = '-' };
    if (typeof (data.totalDaily.NA) != "undefined") {
        totalDailyNA = Math.round(data.totalDaily.NA.quantity) + ' ' + data.totalDaily.NA.unit;
    } else { totalDailyNA = '-' };

    if (typeof (data.totalNutrients.CHOCDF) != "undefined") {
        CHOCDF = Math.round(data.totalNutrients.CHOCDF.quantity * 10) / 10 + ' ' + data.totalNutrients.CHOCDF.unit;
    } else { CHOCDF = '-' };
    if (typeof (data.totalDaily.CHOCDF) != "undefined") {
        totalDailyCHOCDF = Math.round(data.totalDaily.CHOCDF.quantity) + ' ' + data.totalDaily.CHOCDF.unit;
    } else { totalDailyCHOCDF = '-' };

    if (typeof (data.totalNutrients.FIBTG) != "undefined") {
        FIBTG = Math.round(data.totalNutrients.FIBTG.quantity * 10) / 10 + ' ' + data.totalNutrients.FIBTG.unit;
    } else { FIBTG = '-' };
    if (typeof (data.totalDaily.FIBTG) != "undefined") {
        totalDailyFIBTG = Math.round(data.totalDaily.FIBTG.quantity) + ' ' + data.totalDaily.FIBTG.unit;
    } else { totalDailyFIBTG = '-' };

    if (typeof (data.totalNutrients.SUGAR) != "undefined") {
        SUGAR = Math.round(data.totalNutrients.SUGAR.quantity * 10) / 10 + ' ' + data.totalNutrients.SUGAR.unit;
    } else { SUGAR = '-' };

    if (typeof (data.totalNutrients.SUGARadded) != "undefined") {
        SUGARadded = Math.round(data.totalNutrients.SUGARadded.quantity * 10) / 10 + ' ' + data.totalNutrients.SUGARadded.unit;
    } else { SUGARadded = '-' };

    if (typeof (data.totalNutrients.PROCNT) != "undefined") {
        PROCNT = Math.round(data.totalNutrients.PROCNT.quantity * 10) / 10 + ' ' + data.totalNutrients.PROCNT.unit;
    } else { PROCNT = '-' };
    if (typeof (data.totalDaily.PROCNT) != "undefined") {
        totalDailyPROCNT = Math.round(data.totalDaily.PROCNT.quantity) + ' ' + data.totalDaily.PROCNT.unit;
    } else { totalDailyPROCNT = '-' };

    if (typeof (data.totalNutrients.VITD) != "undefined") {
        VITD = Math.round(data.totalNutrients.VITD.quantity * 10) / 10 + ' ' + data.totalNutrients.VITD.unit;
    } else { VITD = '-' };
    if (typeof (data.totalDaily.VITD) != "undefined") {
        totalDailyVITD = Math.round(data.totalDaily.VITD.quantity) + ' ' + data.totalDaily.VITD.unit;
    } else { totalDailyVITD = '-' };

    if (typeof (data.totalNutrients.CA) != "undefined") {
        CA = Math.round(data.totalNutrients.CA.quantity * 10) / 10 + ' ' + data.totalNutrients.CA.unit;
    } else { CA = '-' };
    if (typeof (data.totalDaily.CA) != "undefined") {
        totalDailyCA = Math.round(data.totalDaily.CA.quantity) + ' ' + data.totalDaily.CA.unit;
    } else { totalDailyCA = '-' };

    if (typeof (data.totalNutrients.FE) != "undefined") {
        FE = Math.round(data.totalNutrients.FE.quantity * 10) / 10 + ' ' + data.totalNutrients.FE.unit;
    } else { FE = '-' };
    if (typeof (data.totalDaily.FE) != "undefined") {
        totalDailyFE = Math.round(data.totalDaily.FE.quantity) + ' ' + data.totalDaily.FE.unit;
    } else { totalDailyFE = '-' };

    if (typeof (data.totalNutrients.K) != "undefined") {
        K = Math.round(data.totalNutrients.K.quantity * 10) / 10 + ' ' + data.totalNutrients.K.unit;
    } else { K = '-' };
    if (typeof (data.totalDaily.K) != "undefined") {
        totalDailyK = Math.round(data.totalDaily.K.quantity) + ' ' + data.totalDaily.K.unit;
    } else { totalDailyK = '-' };

    table = ` <div class="nutritional-values" tabindex="0">
                    <div class="nutritional-values__header">
                        <h3 class="nutritional-values__title">Nutritional Value</h3>
                    </div>
                    <table class="nutritional-values__table table table-hover table-sm">
                        <thead>
                            <tr>
                                <th colspan="3" id="nutritional-values__table-amount">Amount Per Serving</th>
                            </tr>
                            <tr id="nutritional-values__table-cal">
                                <th colspan="2" >Calories</th>
                                <td>${totalCal}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="thick-row">
                                <td colspan="3" id="nutritional-values__table-daily">% Daily Value*</td>
                            </tr>
                            <tr>
                                <th colspan="2"><span>Total Fat</span> ${FAT}</th>
                                <td><span>${totalDailyFAT}</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Saturated Fat ${FASAT}</th>
                                <td><span>${totalDailyFASAT}</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Trans Fat ${FATRN}</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th colspan="2"><span>Cholesterol</span> ${CHOLE}</th>
                                <td><span>${totalDailyCHOLE}</span></td>
                            </tr>
                            <tr>
                                <th colspan="2"><span>Sodium</span> ${NA}</th>
                                <td><span>${totalDailyNA}</span></td>
                            </tr>
                            <tr>
                                <th colspan="2"><span>Total Carbohydrate</span> ${CHOCDF}</th>
                                <td><span>${totalDailyCHOCDF}</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Dietary Fiber ${FIBTG}</th>
                                <td><span>${totalDailyFIBTG}</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Total Sugars ${SUGAR}</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Includes ${SUGARadded} Added Sugars</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th colspan="2"><span>Protein</span> ${PROCNT}</th>
                                <td><span>${totalDailyPROCNT}</span></td>
                            </tr>
                            <tr>
                                <th colspan="2">Vitamin D ${VITD}</th>
                                <td><span>${totalDailyVITD}</span></td>
                            </tr>
                            <tr>
                                <th colspan="2">Calcium ${CA}</th>
                                <td><span>${totalDailyCA}</span></td>
                            </tr>
                            <tr>
                                <th colspan="2">Iron ${FE}</th>
                                <td><span>${totalDailyFE}</span></td>
                            </tr>
                            <tr >
                                <th colspan="2">Potassium ${K}</th>
                                <td><span>${totalDailyK}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="nutritional-values__table-daily">*Percent Daily Values are based on a
                        2000 calorie diet</p>
                </div>`;
    nutritionalInfoPerIngr.innerHTML = html;
    nutritionalInfoTable.innerHTML = table;
}

//
// ----------- Smooth Scroll - source https://www.codegrepper.com/code-examples/javascript/scrolling+link+java+script
//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//
// ----------- Scroll to top - source https://www.youtube.com/watch?v=Pd71ZZeIhaI
//
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scroll-top');
    scroll.classList.toggle("active", window.scrollY > 500)
})

document.getElementById("scroll-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});