const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', event => {
  if (textInputEl.value.length === Number(textInputEl.dataset.length)) {
    textInputEl.classList.remove('invalid');
    return textInputEl.classList.add('valid');
  }

  return textInputEl.classList.add('invalid');
});
