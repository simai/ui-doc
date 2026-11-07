// Search on the host's side: search.remote stops the menu filtering its own
// rows. Each query comes as sf-menu-context-search with detail.query; the host
// asks its server (a list and a timer here) and writes what it found into
// entries. Only the first rows are sent, as a server would.

const SITES = [
  'example.ru', 'shop.example.ru', 'blog.example.ru', 'docs.example.ru', 'help.example.ru',
  'portal.simai.ru', 'ui.simai.io', 'docara.simai.io', 'effects.simai.io', 'admin.simai.io',
  'kazan.example.ru', 'moscow.example.ru', 'spb.example.ru', 'novosibirsk.example.ru', 'ekb.example.ru',
  'news.example.com', 'store.example.com', 'careers.example.com', 'status.example.com', 'api.example.com',
];
const LIMIT = 6;

// The host's server: rows that contain the query, after a short wait.
const findSites = (query) => new Promise((resolve) => {
  const text = query.trim().toLowerCase();
  const found = SITES.filter((site) => site.includes(text));
  setTimeout(() => resolve({total: found.length, sites: found.slice(0, LIMIT)}), 300);
});

// With nothing found the host gives no rows: the menu stays open on its field
// and shows its own search.empty.
const rows = ({total, sites}, current) => [
  ...sites.map((site) => ({id: site, text: site, initials: site.slice(0, 2).toUpperCase(), kind: 'radio', checked: site === current})),
  ...(total > sites.length ? [{type: 'note', text: `Показаны ${sites.length} из ${total}; уточните запрос`}] : []),
];

const initialize = async () => {
  await customElements.whenDefined('sf-menu-context');
  const demo = document.querySelector('[data-context-menu-demo="host-search"]');
  if (!demo || demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const label = demo.querySelector('[data-menu-site]');
  const menu = demo.querySelector('sf-menu-context');
  let current = 'example.ru';
  let asked = 0;
  let last = await findSites('');

  menu.search = {placeholder: 'Найти сайт', empty: 'Ничего не найдено', remote: true};
  menu.entries = rows(last, current);

  menu.addEventListener('sf-menu-context-search', async (event) => {
    const query = event.detail.query;
    const ticket = ++asked;
    docara.example.log('sf-menu-context-search', {query});
    const answer = await findSites(query);
    if (ticket !== asked) return; // a newer query came while this one was asked
    last = answer;
    menu.entries = rows(answer, current);
    docara.example.log('entries', `${answer.sites.length} из ${answer.total}`);
  });
  menu.addEventListener('sf-menu-context-select', (event) => {
    current = event.detail.id;
    label.textContent = `Сайт: ${current}`;
    menu.entries = rows(last, current);
    docara.example.log('sf-menu-context-select', {id: event.detail.id});
  });
  anchor.addEventListener('click', () => menu.toggleFor(anchor));
};

initialize();
