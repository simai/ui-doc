// Resource list: the page owns the data, the list owns the rows. Search and
// the «all / with problems» switch filter the same array; an empty result shows the list's
// own empty state with one way back. A row opens the record, the «⋯» menu
// carries the rest; deleting goes through the delete recipe. The example
// log shows what the page receives.
const sites = [
  {id: 's1', text: 'Магазин «Северный ветер»', supporting: 'nord-wind.ru · Магазин', icon: 'storefront', state: 'on'},
  {id: 's2', text: 'Корпоративный сайт', supporting: 'simai.example · Визитка', icon: 'language', state: 'on'},
  {id: 's3', text: 'Блог о путешествиях', supporting: 'travel-notes.ru · Блог', icon: 'article', state: 'on', badge: {text: 'Сертификат', tone: 'warning'}},
  {id: 's4', text: 'Лендинг весенней акции', supporting: 'spring.nord-wind.ru · Лендинг', icon: 'campaign', state: 'off', badge: {text: 'Остановлен', tone: 'neutral'}},
  {id: 's5', text: 'Документация API', supporting: 'docs.simai.example · Документация', icon: 'menu_book', state: 'on'},
  {id: 's6', text: 'Портал партнёров', supporting: 'partners.simai.example · Портал', icon: 'handshake', state: 'on', badge: {text: 'Нет копии', tone: 'error'}},
  {id: 's7', text: 'Архив новостей 2024', supporting: 'news-2024.simai.example · Блог', icon: 'article', state: 'off', badge: {text: 'Остановлен', tone: 'neutral'}},
  {id: 's8', text: 'Школа программирования', supporting: 'code-school.ru · Курсы', icon: 'school', state: 'on'},
  {id: 's9', text: 'Кофейня на Садовой', supporting: 'sadovaya.coffee · Визитка', icon: 'local_cafe', state: 'on'},
];

// The list moves its slotted empty state while it draws its first frame:
// wait a few frames for it rather than reading it mid-move.
const settled = async (selector) => {
  for (let frame = 0; frame < 30; frame++) {
    const element = document.querySelector(selector);
    if (element) return element;
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return null;
};

const initialize = async () => {
  await Promise.all(['sf-list', 'sf-input', 'sf-segmented', 'sf-empty-state'].map((tag) => customElements.whenDefined(tag)));
  const list = document.querySelector('#sites');
  const search = document.querySelector('#sites-search');
  const state = document.querySelector('#sites-state');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';

  let query = '';
  let shown = 'all';
  const render = () => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const items = sites.filter((site) => (shown === 'all' || Boolean(site.badge))
      && words.every((word) => `${site.text} ${site.supporting}`.toLowerCase().includes(word)));
    // A stopped site has nothing to stop: its row narrows the menu.
    list.setItems({items: items.map((site) => (site.state === 'off' ? {...site, actions: ['visit', 'copy']} : site)), options: {hasMore: false}});
  };

  list.actions = [
    {id: 'visit', text: 'Открыть сайт', icon: 'open_in_new'},
    {id: 'copy', text: 'Копировать домен', icon: 'content_copy'},
    {id: 'stop', text: 'Остановить', icon: 'pause_circle'},
  ];

  search.addEventListener('input', () => {
    query = String(search.value ?? '');
    render();
  });
  state.addEventListener('change', (event) => {
    shown = event.detail.value;
    render();
  });
  const empty = await settled('#sites-empty');
  empty.actions = [{id: 'reset', text: 'Показать все', appearance: 'outline'}];
  empty.addEventListener('sf-empty-state-action', () => {
    query = '';
    shown = 'all';
    search.value = '';
    state.value = 'all';
    render();
  });
  list.addEventListener('sf-list-open', (event) => {
    list.selected = event.detail.id;
  });
  list.addEventListener('sf-list-apply', (event) => {
    if (event.detail.action !== 'stop') return;
    const site = sites.find((entry) => entry.id === event.detail.ids[0]);
    if (!site) return;
    site.state = 'off';
    site.badge = {text: 'Остановлен', tone: 'neutral'};
    render();
  });

  render();
};

initialize();
