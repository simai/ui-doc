(async () => {
  await Promise.all(['sf-steps', 'sf-list-timeline'].map((tag) => customElements.whenDefined(tag)));
  document.querySelector('#phone-steps').items = [
    {label: 'Заказ принят', text: '12 ноября, 10:14'},
    {label: 'Собран на складе', text: '12 ноября, 15:40'},
    {label: 'Передан в службу доставки', text: 'ожидается 15 ноября'},
    {label: 'Получен'},
  ];
  const anna = {name: 'Анна Котова', hue: 'teal'};
  document.querySelector('#phone-history').items = [
    {id: 'h1', icon: 'local_shipping', actor: {name: 'Робот', system: true}, time: '2026-11-13T09:05:00+03:00', title: 'передал заказ в СДЭК', text: 'Трек 1 234 567 890'},
    {id: 'h2', icon: 'swap_horiz', actor: anna, time: '2026-11-12T15:40:00+03:00', title: 'изменила статус', change: {label: 'Статус', before: 'Принят', after: 'Собран'}},
  ];
})();
