fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data =>{
    const mealName = data.meals[0]
    console.log(mealName.strMeal)

})

// const displayMeals = meals =>{

//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         console.log(meal);
        
//     }
    

// }