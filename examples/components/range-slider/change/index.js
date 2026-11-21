// Project budgets, thousand roubles: the list the slider filters.
const budgets = [8, 15, 22, 30, 35, 41, 48, 52, 57, 64, 75, 90];
const result = document.querySelector('#range-slider-result');

const applyFilter = ([from, to]) => {
  const count = budgets.filter((budget) => budget >= from && budget <= to).length;
  result.textContent = `Подходит проектов: ${count} из ${budgets.length}`;
};

// change comes when the person sets the value; setValue does not create it.
document.querySelector('#range-slider-budget').addEventListener('change', (event) => {
  applyFilter(event.detail.value);
});
