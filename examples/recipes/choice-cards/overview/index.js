const PRICE = {courier: 350, pickup: 150, self: 0};
Promise.all(['sf-input-choice', 'sf-button'].map((t) => customElements.whenDefined(t))).then(() => {
  const form = document.getElementById('order');
  const payment = document.getElementById('payment');
  const total = document.getElementById('order-total');
  document.getElementById('delivery').addEventListener('sf-input-choice-change', (event) => {
    total.textContent = `Итого ${(12490 + (PRICE[event.detail.value] ?? 0)).toLocaleString('ru-RU')} ₽`;
  });
  payment.addEventListener('sf-input-choice-change', () => payment.removeAttribute('invalid'));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!payment.value) {
      payment.setAttribute('error-message', 'Выберите способ оплаты.');
      payment.setAttribute('invalid', '');
      payment.querySelector('input')?.focus();
      docara.example.log('invalid', {field: 'payment'});
      return;
    }
    docara.example.log('submit', Object.fromEntries(new FormData(form)));
  });
});
