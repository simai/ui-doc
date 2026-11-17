(async () => {
  await customElements.whenDefined('sf-input-choice');
  document.querySelector('#phone-delivery').items = [
    {value: 'courier', label: 'Курьером', caption: 'Привезём в удобный интервал', price: '350 ₽', term: '2–3 дня'},
    {value: 'pickup', label: 'Пункт выдачи', caption: 'Больше 2 000 пунктов', price: '150 ₽', term: '1–2 дня'},
  ];
})();
