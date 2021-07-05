fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = categories =>{



    const categoriesItem = categories.categories;
    console.log(categoriesItem);
    const categoriesDiv = document.getElementById('categoriesChart');
    for (let i = 0; i < categoriesItem.length; i++) {
        const categoriesValue =categoriesItem[i];

        const categoryDiv  = document.createElement('div');


        categoryDiv.className = 'Category';


        const categoriesInfo = `
            <h1>${categoriesValue.strCategory}</h1>
             <img src="${categoriesValue.strCategoryThumb}"></img>
           
           `

           categoryDiv.innerHTML = categoriesInfo;
           categoriesDiv.appendChild(categoryDiv);

       

    }
}


// search Button

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
            categoriesChart.style.display = "none";
            meals.style.display = "block";



            document.getElementById('meals').addEventListener('click' , function () {

                meals.style.display = "none";
                mealAbout.style.display = "block";
        
                // document.getElementById('meal-name').innerText = MealDetails.strMeal;
                // document.getElementById('meal-img').src = MealDetails.strMealThumb; 
        
                const mealAboutFirstDiv  = document.getElementById('mealAbout');
                const mealAboutDiv  = document.createElement('div');
                
                mealAboutDiv.className = 'mealAboutClass';
        
                const  mealAboutInfo = `
                    <h1>${MealDetails.strMeal}</h1>
                     <img src="${MealDetails.strMealThumb}"></img>
                     <h4>${MealDetails.strCategory}</h4>
                     <h4>${MealDetails.strArea}</h4>
                     <h4>${MealDetails.strIngredient1}</h4>
                     <h4>${MealDetails.strIngredient3}</h4>
                     <h4>${MealDetails.strIngredient4}</h4>
                     <h4>${MealDetails.strIngredient5}</h4>
                     <h4>${MealDetails.strIngredient6}</h4>
                     <h4>${MealDetails.strIngredient7}</h4>
                     <h4>${MealDetails.strIngredient8}</h4>
                     <h4>${MealDetails.strMeasure1}</h4>
                     <h4>${MealDetails.strMeasure2}</h4>
                     <h4>${MealDetails.strMeasure3}</h4>
                     <h4>${MealDetails.strMeasure4}</h4>
                     <h4>${MealDetails.strMeasure5}</h4>
                     <h4>${MealDetails.strMeasure6}</h4>
                     <h4>${MealDetails.strMeasure7}</h4>
                     <h4>${MealDetails.strMeasure8}</h4>
                     
                   
                   `
                   mealAboutDiv.innerHTML =  mealAboutInfo;
                   mealAboutFirstDiv.appendChild(mealAboutDiv);
        
            })
            
            
            showDetailsMeal();
           // console.log(strMealThumb);
        })
})

function showDetailsMeal(){




}

























































// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then(res => res.json())
//     .then(data => displayCategoriesMeals(data))


// function displayCategoriesMeals(categories) {

//     const mealItem = categories.categories;
//     const div = document.getElementById('categoriesChart');

//     mealItem.map(categorie => {

//         const image = document.createElement('image');
//         image.innerHTML =  categorie.strCategoryThumb;
//         div.appendChild(image);

//         const h3 = document.createElement('h3');
//         h3.innerText =  categorie.strCategory;
//         div.appendChild(h3);

//         const p = document.createElement('p');
//         p.innerText =  categorie.strCategoryDescription;
//         div.appendChild(p);




// //         const categoriesInfo = `
// //     <h1>${categorie.strCategory}</h1>
// //     <p>${categorie.strCategoryDescription}</p>
// //     <img src="${categorie.strCategoryThumb}">
// //   `
// //         div.innerHTML = categoriesInfo;

// //         console.log(categorie.strCategory);
//     });
//     //console.log(meal);

// }


// const displayMeals = meals =>{

//     console.log(meals);


//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         console.log(meal.strCategory);

//     }
// }