const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = data => {
    const mealsContaier = document.getElementById('meals-container');
    mealsContaier.innerText = '';
    data.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur perspiciatis reiciendis recusandae maxime qui doloremque sed suscipit voluptas doloribus quia quis laborum,</p>
                     <button onclick="mealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                        Details
                    </button>
                </div>
            </div>
        </div>
        `;
        mealsContaier.appendChild(div)
    });
}

const searchMeal = () => {
    const searchText = document.getElementById('search-text');
    const searchTextValue = searchText.value;
    loadMeals(searchTextValue)
}

const mealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals[0]))
};

const showMealDetails = mealData => {
    document.getElementById('mealDetailsLabel').innerText = mealData.strMeal;
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = `
    <img src="${mealData.strMealThumb}" class="card-img-top" alt="...">
    <p class="mt-4"><span class="text-primary">Meal Aria:</span> ${mealData.strArea}</p>
    <p class=""><span class="text-primary">Meal Cetagory:</span> ${mealData.strCategory}</p>
    <p class=""><span class="text-primary">Meal Ingredient:</span>
    ${mealData.strIngredient1 ? mealData.strIngredient1 : ''}, 
    ${mealData.strIngredient2 ? mealData.strIngredient2 : ''}, 
    ${mealData.strIngredient3 ? mealData.strIngredient3 : ''}, 
    ${mealData.strIngredient4 ? mealData.strIngredient4 : ''}, 
    ${mealData.strIngredient5 ? mealData.strIngredient5 : ''},
    ${mealData.strIngredient6 ? mealData.strIngredient6 : ''}, 
    ${mealData.strIngredient7 ? mealData.strIngredient7 : ''}, 
    ${mealData.strIngredient8 ? mealData.strIngredient8 : ''}, 
    ${mealData.strIngredient9 ? mealData.strIngredient9 : ''}, 
    ${mealData.strIngredient10 ? mealData.strIngredient10 : ''}, 
    ${mealData.strIngredient11 ? mealData.strIngredient11 : ''}, 
    ${mealData.strIngredient12 ? mealData.strIngredient12 : ''}, 
    ${mealData.strIngredient13 ? mealData.strIngredient13 : ''}, 
    ${mealData.strIngredient14 ? mealData.strIngredient14 : ''}, 
    ${mealData.strIngredient15 ? mealData.strIngredient15 : ''}, 
    ${mealData.strIngredient16 ? mealData.strIngredient16 : ''}, 
    ${mealData.strIngredient17 ? mealData.strIngredient17 : ''}, 
    ${mealData.strIngredient18 ? mealData.strIngredient18 : ''}, 
    ${mealData.strIngredient19 ? mealData.strIngredient19 : ''}, 
    ${mealData.strIngredient20 ? mealData.strIngredient20 : ''}, 
    </p>
    `;
    console.log(mealData)
}



loadMeals('fish')