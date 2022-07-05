const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')


let itemArrayEl=[...ingredients]
for (let i = 0; i < ingredients.length; i++){
  itemArrayEl[i] = document.createElement("li");
  itemArrayEl[i].textContent = ingredients[i]
  itemArrayEl[i].classList.add('item')
}

listEl.append(...itemArrayEl)