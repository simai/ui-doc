(async () => {
  await customElements.whenDefined('sf-steps');
  document.querySelectorAll('[data-demo="density-steps"]').forEach((steps) => {
    steps.items = [
      {label: 'Заказ принят', text: '12 ноября, 10:14'},
      {label: 'Собран на складе', text: '12 ноября, 15:40'},
      {label: 'Передан в службу доставки', text: 'ожидается 15 ноября'},
      {label: 'Получен'},
    ];
  });
})();
