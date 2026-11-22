const price = 1500;
const total = document.querySelector('#quantity-total');
const money = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0});

const updateTotal = (value) => {
  total.textContent = money.format(Number(value) * price);
};

// The buttons and typing both end with change on the input.
document.querySelector('input[name="places"]').addEventListener('change', (event) => {
  updateTotal(event.target.value);
});
