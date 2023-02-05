const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredientsEl = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const ingredient of ingredients) {
  const itemOfIngredientsEl = document.createElement('li');
  itemOfIngredientsEl.classList = 'item';
  itemOfIngredientsEl.textContent += ingredient;
  fragment.appendChild(itemOfIngredientsEl);
}

document.querySelector('ul#ingredients').append(fragment);
