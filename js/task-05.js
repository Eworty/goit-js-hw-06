const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector(`#name-output`);

inputNameEl.addEventListener('input', event => {
  if (inputNameEl.value === '') {
    return (outputNameEl.textContent = 'Anonymous');
  }
  outputNameEl.textContent = event.currentTarget.value;
});
