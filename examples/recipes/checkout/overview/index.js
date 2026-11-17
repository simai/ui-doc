(async () => {
  const delivery = [
    {value: 'courier', label: 'Курьером', caption: 'Привезём в удобный интервал', price: '350 ₽', term: '2–3 дня'},
    {value: 'pickup', label: 'Пункт выдачи', caption: 'Больше 2 000 пунктов по стране', price: '150 ₽', term: '1–2 дня', badge: 'Выгодно'},
    {value: 'post', label: 'Почта России', caption: 'До отделения рядом с домом', price: '290 ₽', term: '5–9 дней'},
  ];
  const payment = [
    {value: 'card', label: 'Картой онлайн', caption: 'Мир, Visa, Mastercard'},
    {value: 'sbp', label: 'СБП', caption: 'Через приложение банка'},
    {value: 'cash', label: 'При получении', caption: 'Наличными или картой курьеру'},
  ];
  const GOODS = 4720;
  const money = (value) => value.toLocaleString('ru-RU') + ' ₽';
  // Части на скрытых шагах загружаются, когда шаг откроют: ждём только видимые.
  await Promise.all(['sf-steps', 'sf-input-choice', 'sf-button'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const steps = $('#checkout-steps');
  const next = $('#next');
  const back = $('#back');
  const narrow = matchMedia('(width < 44rem)');
  let current = 1;
  let total = GOODS + 350;

  $('#delivery').items = delivery;
  $('#payment').setAttribute('items', JSON.stringify(payment));

  const render = () => {
    document.querySelectorAll('[data-step]').forEach((section) => { section.hidden = Number(section.dataset.step) !== current; });
    steps.setAttribute('current', String(current));
    back.hidden = current === 0;
    const word = current === 3 ? 'Оформить заказ' : 'Далее';
    // На телефоне колонки «Ваш заказ» нет: сумма встаёт в главную кнопку.
    next.setAttribute('text', narrow.matches ? `${word} · ${money(total)}` : word);
    $('#summary').hidden = narrow.matches;
    if (current === 3) fillConfirm();
  };
  // Сводка на скрытом шаге загружается, когда шаг открыт: данные отдаём после показа.
  const fillConfirm = async () => {
    await customElements.whenDefined('sf-list-description');
    $('#confirm-list').items = [
      {label: 'Доставка', value: 'Курьером, 18 ноября'},
      {label: 'Адрес', value: 'Москва, Покровка, 12, кв. 4'},
      {label: 'Получатель', value: 'Ирина Котова, +7 900 111-22-33'},
      {label: 'Оплата', value: 'Картой онлайн'},
    ];
  };

  $('#delivery').addEventListener('change', () => {
    const chosen = delivery.find((item) => item.value === $('#delivery').value);
    if (!chosen) return;
    const price = Number(chosen.price.replace(/\D/g, '')) || 0;
    total = GOODS + price;
    $('#sum-delivery').textContent = chosen.price;
    $('#sum-total').textContent = money(total);
    render();
  });
  steps.addEventListener('sf-steps-change', (event) => {
    const index = event.detail?.current ?? event.detail?.index;
    if (index != null) { current = Number(index); render(); }
  });
  next.addEventListener('click', () => {
    if (current < 3) { current += 1; render(); return; }
    SF.notify({status: 'success', title: 'Заказ № 48 215 оформлен', text: 'Письмо с деталями отправлено на почту.'});
  });
  back.addEventListener('click', () => { if (current > 0) { current -= 1; render(); } });
  narrow.addEventListener('change', render);
  render();
})();
