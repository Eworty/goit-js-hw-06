let counterValue = {
  value: 0,

  decrement() {
    return (this.value -= 1);
  },

  increment() {
    return (this.value += 1);
  },
};

const valueEl = document.querySelector('#value');
const decrementButtonEl = document.querySelector('[data-action = "decrement"]');
const incrementButtonEl = document.querySelector('[data-action = "increment"]');

const onButtonDecrementClick = event => {
  console.log('-1');
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
};

const onButtonIncrementClick = event => {
  console.log('+1');
  counterValue.increment();
  valueEl.textContent = counterValue.value;
};

incrementButtonEl.addEventListener('click', onButtonIncrementClick);
decrementButtonEl.addEventListener('click', onButtonDecrementClick);
