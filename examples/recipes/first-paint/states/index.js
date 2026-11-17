(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelector('#state-more').items = [
    {id: '1', icon: 'newspaper', text: 'Осенняя распродажа: скидки до 30 %', supporting: 'Опубликовано · 14 ноября'},
    {id: '2', icon: 'newspaper', text: 'Новые улуны из Фуцзяня', supporting: 'Черновик · 13 ноября'},
  ];
})();
