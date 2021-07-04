// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => displayMeals(data));

// const displayMeals = meals =>{

//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         console.log(meal.categories);
        
//     }
// }


//search Button

// document.getElementById('submit-btn').addEventListener('click' , function () {
//     var mealName = document.getElementById('meal-name-input').value;
//     console.log(mealName);


//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
//     console.log(url);

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             var MealDetails = data.meals[0];
//             document.getElementById('meal-name').innerText = MealDetails.strMeal;
//             document.getElementById('meal-img').src = MealDetails.strMealThumb;            
//             console.log(strMealThumb);})
// })




fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeals(data))


function displayMeals(categories){

const meal = categories.categories;
  
meal.map(categorie =>console.log(categorie));
//console.log(meal);

}


// const displayMeals = meals =>{

//     console.log(meals);
    

//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         console.log(meal.strCategory);
        
//     }
// }
