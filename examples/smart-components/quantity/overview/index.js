// Each line total follows its quantity; change arrives once per change the
// person makes, input on every step while a button is held.
const money = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0});

const initialize = async () => {
  await customElements.whenDefined('sf-input-quantity');
  const cart = document.querySelector('#quantity-cart');
  if (!cart || cart.dataset.exampleReady === 'true') return;
  cart.dataset.exampleReady = 'true';
  const update = () => {
    let total = 0;
    for (const line of cart.querySelectorAll('.cart-line')) {
      const sum = Number(line.dataset.price) * (line.querySelector('sf-input-quantity').value ?? 0);
      line.querySelector('.cart-sum').textContent = money.format(sum);
      total += sum;
    }
    cart.querySelector('#quantity-cart-total').textContent = money.format(total);
  };
  cart.addEventListener('input', update);
  cart.addEventListener('change', (event) => {
    update();
    docara.example.log('change', event.detail);
  });
  update();
};

initialize();
