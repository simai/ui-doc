(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelector('#phone-notify')?.setItems({items: [
    {id: 'n1', text: 'Новый заказ 1042', supporting: '3 490 ₽ · 5 минут назад', icon: 'shopping_bag'},
    {id: 'n2', text: 'Ответ покупателя', supporting: 'Заказ 1038 · час назад', icon: 'chat'},
    {id: 'n3', text: 'Сертификат истекает через 5 дней', supporting: 'nord-wind.ru · вчера', icon: 'warning'},
  ], options: {hasMore: false}});
})();
