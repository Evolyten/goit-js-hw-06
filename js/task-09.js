function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const btnChangeEl = document.querySelector('.change-color')
const colorTextEl = document.querySelector('.color')

btnChangeEl.addEventListener('click', () => {
  let currentColor= getRandomHexColor()
   bodyEl.style.backgroundColor = currentColor;
  colorTextEl.textContent = currentColor;
})