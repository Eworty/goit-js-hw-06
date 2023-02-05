function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

changeColorButton.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = document.body.style.backgroundColor;
});
