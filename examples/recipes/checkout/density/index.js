(async () => {
  await customElements.whenDefined('sf-input-choice');
  document.querySelectorAll('[data-demo="density-choice"]').forEach((choice) => {
    choice.items = [
      {value: 'card', label: 'Картой онлайн', caption: 'Мир, Visa, Mastercard'},
      {value: 'sbp', label: 'СБП', caption: 'Через приложение банка'},
      {value: 'cash', label: 'При получении', caption: 'Наличными или картой курьеру'},
    ];
  });
})();
