// A menu with a search: search on the menu itself puts the field above the
// rows. The field stays where it is while the rows scroll in their own area
// under it; the chosen city is marked by the row's fill.

const CITIES = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород',
  'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону', 'Уфа', 'Красноярск',
  'Воронеж', 'Пермь', 'Волгоград', 'Краснодар', 'Саратов', 'Тюмень',
];

const initialize = async () => {
  await customElements.whenDefined('sf-menu-context');
  const demo = document.querySelector('[data-context-menu-demo="search"]');
  if (!demo || demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const label = demo.querySelector('[data-menu-city]');
  const menu = demo.querySelector('sf-menu-context');
  let current = 'Казань';

  const rows = () => CITIES.map((city) => ({id: city, text: city, kind: 'radio', checked: city === current}));
  menu.search = {placeholder: 'Найти город', empty: 'Ничего не найдено'};
  menu.entries = rows();

  menu.addEventListener('sf-menu-context-select', (event) => {
    current = event.detail.id;
    label.textContent = `Город: ${current}`;
    menu.entries = rows();
    docara.example.log('sf-menu-context-select', {id: event.detail.id});
  });
  anchor.addEventListener('click', () => menu.toggleFor(anchor));
};

initialize();
