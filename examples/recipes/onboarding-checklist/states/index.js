(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelector('[data-state="none"]').setItems({items: [
    {id: 'theme', text: 'Выбрать оформление', supporting: '1 минута', icon: 'radio_button_unchecked'},
    {id: 'logo', text: 'Добавить логотип', supporting: '2 минуты', icon: 'radio_button_unchecked'},
    {id: 'domain', text: 'Подключить домен', supporting: '5 минут', icon: 'radio_button_unchecked'},
  ], options: {hasMore: false}});
})();
