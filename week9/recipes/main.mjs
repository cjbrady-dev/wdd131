import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.name;

        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;

        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(recipeDescription);

        recipeList.appendChild(recipeCard);
    });
});
