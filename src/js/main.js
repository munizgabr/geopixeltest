// Teste 1
const clockElement = document.querySelector('.clock');

setInterval(() => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Teste 2
const checklistElement = document.querySelector('#checklist');
const itemInputElement = document.querySelector('#item');
const addButtonElement = document.querySelector('#add');
const removeButtonElement = document.querySelector('#remove');
const clearButtonElement = document.querySelector('#clear');
const selectedElement = document.querySelector('#selected');

addButtonElement.addEventListener('click', () => {
  const item = itemInputElement.value;
  if (item) {
    const optionElement = document.createElement('option');
    optionElement.textContent = item;
    checklistElement.appendChild(optionElement);
  }
});

removeButtonElement.addEventListener('click', () => {
  const selectedIndex = checklistElement.selectedIndex;
  if (selectedIndex >= 0) {
    checklistElement.remove(selectedIndex);
  }
});

clearButtonElement.addEventListener('click', () => {
  itemInputElement.value = '';
});

checklistElement.addEventListener('change', () => {
  const selectedOptionElement = checklistElement.options[checklistElement.selectedIndex];
  selectedElement.textContent = selectedOptionElement.textContent;
});

// teste 3
const ballElement = document.querySelector('#ball');
const parentElement = document.querySelector('#parent');

ballElement.addEventListener('mouseover', () => {
  const parentRect = parentElement.getBoundingClientRect();
  const x = Math.random() * (parentRect.width - 50);
  const y = Math.random() * (parentRect.height - 50);
  ballElement.style.transform = `translate(${x}px, ${y}px)`;
});