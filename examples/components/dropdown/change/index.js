const delivery = {kazan: 'завтра', moscow: 'через 2 дня', ufa: 'через 3 дня'};
const result = document.querySelector('#dropdown-change');

// The list says what was chosen: value, label and all selected values.
document.querySelector('.sf-dropdown').addEventListener('change', (event) => {
  const {value, label} = event.detail;
  result.textContent = value ? `${label}: доставка ${delivery[value]}` : 'Город не выбран';
});
