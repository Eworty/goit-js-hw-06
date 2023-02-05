function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

const makeBoxesMarkup = () => {
  const createBoxes = amount => {
    const boxes = new Array(amount).fill('');
    return boxes.reduce((resultString, element, index, array) => {
      return (resultString += `<div style = 'width: ${30 + index * 10}px; height: ${
        30 + index * 10
      }px; background-color: ${getRandomHexColor()}'></div>`);
    }, ``);
  };
  boxesEl.insertAdjacentHTML('beforeend', createBoxes(Number(inputEl.value)));
};

const removeBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

createBtnEl.addEventListener('click', makeBoxesMarkup);
destroyBtnEl.addEventListener('click', removeBoxes);
