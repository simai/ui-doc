(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelectorAll('[data-demo="density-start"]').forEach((list) => list.setItems({items: [
    {id: 'theme', text: 'Выбрать оформление', supporting: 'Готово', icon: 'check_circle'},
    {id: 'logo', text: 'Добавить логотип', supporting: '2 минуты', icon: 'radio_button_unchecked'},
    {id: 'domain', text: 'Подключить домен', supporting: '5 минут', icon: 'radio_button_unchecked'},
  ], options: {hasMore: false}}));
})();
