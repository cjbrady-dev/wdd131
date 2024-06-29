// Import in the list of recipes from recipes.mjs into main.js
import recipes from './recipes.mjs';

// Create a function to generate a random number >= 0 and < num
function _random(num) {
    return Math.floor(Math.random() * num);
}
console.log(_random(5));

// Create a function that will use the imported recipes, and the random function from step 2 to return a random recipe.
function getRandomRecipe(recipe) {
    let repIndex = _random(recipe.length);
    return recipe[repIndex];
}
console.log(getRandomRecipe(recipes));

// Using the HTML in the index.html, create a template function that will be responsible for generating the HTML necessary to display a recipe.
function generateRecipeHTML(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="image of ${recipe.name}" />
            <figcaption>
                <ul class="recipe__tags">
                    ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${ratingStars(recipe.rating)}
                    </span>
                </p>
                <p class="recipe__description">
                    ${recipe.description}
                </p>
            </figcaption>
        </figure>
    `;
}

// Template function to generate the correct rating stars.
function ratingStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<span class="icon-star">⭐</span>' : '<span class="icon-star-empty">☆</span>';
    }
    return stars;
}

// Using the random recipe function, create an init function that should run when the page loads to render out a random recipe.
function init() {
    const randomRecipe = getRandomRecipe(recipes);
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = generateRecipeHTML(randomRecipe);
}

document.addEventListener('DOMContentLoaded', init);

// Filter recipes based on the search query
function filterRecipes(query) {
    return recipes.filter(recipe => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
            recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
        );
    }).sort((a, b) => a.name.localeCompare(b.name));
}

// Handle the search functionality
function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Render the list of recipes to the page
function renderRecipes(recipes) {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = recipes.map(recipe => generateRecipeHTML(recipe)).join('');
}

// Add event listener to the search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchHandler);
