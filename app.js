// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => displayMeals(data));

// const displayMeals = meals =>{

//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         console.log(meal.categories);
        
//     }
// }



document.getElementById('submit-btn').addEventListener('click' , function () {
    var mealName = document.getElementById('meal-name-input').value;
    console.log(mealName);


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            var MealDetails = data.meals[0];
            document.getElementById('meal-name').innerText = MealDetails.strMeal;
            document.getElementById('meal-img').src = MealDetails.strMealThumb;

            // let weatherTempInKelvin = data.main.temp;
            // let weatherTempInCelsius = Math.round(weatherTempInKelvin - 273.15);


            // document.getElementById('city-temp').innerText = weatherTempInCelsius;

            // document.getElementById('city-weather').innerText = weatherDetails.main;

            // let iconSet = MealDetails.strMealThumb;
            // let strMealThumb = `https://www.themealdb.com/images/media/meals/${iconSet}.jpg`;
            // document.getElementById('meal-img').src = strMealThumb;
            
            
            console.log(strMealThumb);})
})