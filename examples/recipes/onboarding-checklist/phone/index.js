(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelector('#phone-start').setItems({items: [
    {id: 'theme', text: 'Выбрать оформление', supporting: 'Готово', icon: 'check_circle'},
    {id: 'logo', text: 'Добавить логотип', supporting: 'Готово', icon: 'check_circle'},
    {id: 'page', text: 'Создать первую страницу', supporting: 'Готово', icon: 'check_circle'},
    {id: 'domain', text: 'Подключить домен к сайту магазина', supporting: '5 минут', icon: 'radio_button_unchecked'},
    {id: 'team', text: 'Пригласить коллег', supporting: '1 минута', icon: 'radio_button_unchecked'},
  ], options: {hasMore: false}});
})();
