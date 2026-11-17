(async () => {
  await customElements.whenDefined('sf-button');
  document.querySelector('#many-views').menu = [
    'Все товары', 'Мои черновики', 'Нет на складе', 'Скидки ноября', 'Новинки', 'Дороже 2 000 ₽', 'Без фото', 'Без описания', 'Чайники и посуда',
  ].map((text, index) => ({id: 'v' + index, text}));
})();
