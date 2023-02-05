const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');
for (let itemEl of itemsEl) {
  console.log('Category:', itemEl.firstElementChild.textContent);
  console.log('Elements', itemEl.lastElementChild.children.length);
}
