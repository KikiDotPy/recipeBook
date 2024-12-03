const recipes = [
  {
    name: "Christmas Morning Pancakes",
    description: "Fluffy pancakes perfect for a holiday breakfast.",
    ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "1 tbsp sugar", "1 tsp cinnamon"],
    instructions: [
      "Mix all the dry ingredients.",
      "Add wet ingredients and whisk until smooth.",
      "Heat a non-stick pan and pour batter.",
      "Cook each side for 2-3 minutes.",
      "Serve with maple syrup and berries."
    ]
  },
  // Add 5 more recipes...
];

const recipeListEl = document.getElementById("recipe-list");
const recipeDetailEl = document.getElementById("recipe-detail");
const recipeContentEl = document.getElementById("recipe-content");
const backButton = document.getElementById("back-button");
const toggleMusic = document.getElementById("toggle-music");
const backgroundMusic = document.getElementById("background-music");

// Display Recipe Cards
function renderRecipeList() {
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.description}</p>`;
    card.onclick = () => showRecipeDetail(index);
    recipeListEl.appendChild(card);
  });
}

// Show Recipe Detail
function showRecipeDetail(index) {
  const recipe = recipes[index];
  recipeContentEl.innerHTML = `
    <h2>${recipe.name}</h2>
    <p>${recipe.description}</p>
    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
    <h3>Instructions</h3>
    <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join("")}</ol>
  `;
  recipeListEl.parentElement.classList.add("hidden");
  recipeDetailEl.classList.remove("hidden");
}

// Back to List
backButton.onclick = () => {
  recipeListEl.parentElement.classList.remove("hidden");
  recipeDetailEl.classList.add("hidden");
};

// Music Toggle
toggleMusic.onclick = () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusic.textContent = "Pause Music 🎵";
  } else {
    backgroundMusic.pause();
    toggleMusic.textContent = "Play Music 🎵";
  }
};

document.addEventListener("DOMContentLoaded", renderRecipeList);
