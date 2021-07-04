fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = categories =>{



    const categoriesItem = categories.categories;
    console.log(categoriesItem);
    const categoriesDiv = document.getElementById('categories-chart');
    for (let i = 0; i < categoriesItem.length; i++) {
        const categoriesValue =categoriesItem[i];

        const categoryDiv  = document.createElement('div');

        //console.log(categoriesValue.strCategory);

        

        // const h3 = document.createElement('h3');
        // h3.innerText =  categoriesValue.strCategory;
        // categoriesDiv.appendChild(h3);


        // const p = document.createElement('p');
        // p.innerText =  categoriesValue.strCategoryDescription;
        // categoriesDiv.appendChild(p);


        // const images = document.getElementById('categories-image');
        // images.src =  categoriesValue.strCategoryThumb;
        




        categoryDiv.className = 'Category';

        const categoriesInfo = `
            <h1>${categoriesValue.strCategory}</h1>
            
             <img src="${categoriesValue.strCategoryThumb}"></img>
           
           `
           categoryDiv.innerHTML = categoriesInfo;
           categoriesDiv.appendChild(categoryDiv);

        //    <img src="${categoriesValue.strCategoryThumb}"></img>

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
            console.log(strMealThumb);})
})




// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then(res => res.json())
//     .then(data => displayCategoriesMeals(data))


// function displayCategoriesMeals(categories) {

//     const mealItem = categories.categories;
//     const div = document.getElementById('categories-chart');

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