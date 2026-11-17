(async () => {
  await customElements.whenDefined('sf-steps');
  document.querySelector('#cancelled-steps').items = [
    {label: 'Заказ принят', text: '12 ноября, 10:14'},
    {label: 'Собран на складе', text: 'отменён: нет товара', state: 'error'},
    {label: 'Передан в службу доставки', state: 'skipped'},
    {label: 'Получен', state: 'skipped'},
  ];
})();
