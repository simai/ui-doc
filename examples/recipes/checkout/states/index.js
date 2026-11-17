(async () => {
  const delivery = [
    {value: 'courier', label: 'Курьером', caption: 'Привезём в удобный интервал', price: '350 ₽', term: '2–3 дня'},
    {value: 'pickup', label: 'Пункт выдачи', caption: 'Больше 2 000 пунктов по стране', price: '150 ₽', term: '1–2 дня', badge: 'Выгодно'},
    {value: 'post', label: 'Почта России', caption: 'До отделения рядом с домом', price: '290 ₽', term: '5–9 дней'},
  ];
  await customElements.whenDefined('sf-input-choice');
  document.querySelector('#state-blocked').items = delivery.map((item) => item.value === 'courier' ? {...item, disabled: true, caption: 'Не возим по этому адресу'} : item);
  document.querySelector('#state-invalid').items = [
    {value: 'card', label: 'Картой онлайн', caption: 'Мир, Visa, Mastercard'},
    {value: 'sbp', label: 'СБП', caption: 'Через приложение банка'},
  ];
  document.querySelector('#state-many').items = delivery.concat([
    {value: 'express', label: 'Экспресс', caption: 'Сегодня до 22:00, только Москва', price: '690 ₽', term: 'сегодня'},
    {value: 'locker', label: 'Постамат', caption: 'Выдача по коду', price: '120 ₽', term: '1–2 дня'},
    {value: 'self', label: 'Самовывоз из лавки', caption: 'Москва, Покровка, 12', price: 'бесплатно', term: 'завтра'},
  ]);
})();
