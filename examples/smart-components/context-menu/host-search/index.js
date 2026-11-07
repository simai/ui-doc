// Search on the host's side: search.remote stops the menu filtering its own
// rows. Each query comes as sf-menu-context-search with detail.query; the host
// asks its server (a list and a timer here) and writes what it found into
// entries. Only the first rows are sent, as a server would.
// <example-helper event-log> -- written from examples/shared/event-log.js by scripts/sync-example-helpers.mjs; edit it there
// Event log for live examples: a panel under the example lists the events its
// components fire, newest first -- the event's name and a short detail -- so a
// reader sees what a press, a choice or a submit sends while it happens.
//
//   <div data-example-event-log class="..."></div>
//   const log = exampleEventLog(document.querySelector('[data-example-event-log]'));
//   log.watch(button, 'sf-button-press');            // detail as sent
//   log.watch(form, 'submit', (event) => '...');     // or a line of your own
//   log.write('click', 'Экспортировать');             // or write it yourself
//
// The panel says «Событий пока нет» until the first event; the text of
// data-example-event-log-empty replaces it. This file is the only copy:
// scripts/sync-example-helpers.mjs writes it into each example's index.js
// that asks for it, and `composer docs:check` fails when a copy differs.
const exampleEventLog = (panel, {limit = 5} = {}) => {
  const list = document.createElement('ol');
  list.className = 'flex flex-col gap-1/2 m-0 p-0 list-none mono text-1/2';
  const empty = document.createElement('li');
  empty.className = 'sans color-on-surface-variant';
  empty.textContent = panel.dataset.exampleEventLogEmpty || 'Событий пока нет';
  list.append(empty);
  panel.replaceChildren(list);
  panel.setAttribute('role', 'log');
  panel.setAttribute('aria-label', 'События примера');

  // A detail in one short line: up to four keys, long values cut.
  const value = (item) => {
    if (typeof item === 'string') return JSON.stringify(item.length > 40 ? `${item.slice(0, 39)}…` : item);
    if (item === null || typeof item !== 'object') return String(item);
    return Array.isArray(item) ? `[${item.length}]` : '{…}';
  };
  const brief = (detail) => {
    if (detail === undefined || detail === null) return '';
    if (typeof detail !== 'object') return String(detail);
    const entries = Object.entries(detail);
    const shown = entries.slice(0, 4).map(([key, item]) => `${key}: ${value(item)}`);
    if (entries.length > 4) shown.push('…');
    return shown.length ? `{${shown.join(', ')}}` : '';
  };

  const write = (name, detail) => {
    empty.remove();
    const row = document.createElement('li');
    row.className = 'flex flex-wrap col-gap-2';
    const label = document.createElement('span');
    label.className = 'color-on-surface';
    label.textContent = name;
    row.append(label);
    const text = typeof detail === 'string' ? detail : brief(detail);
    if (text) {
      const rest = document.createElement('span');
      rest.className = 'color-on-surface-variant';
      rest.textContent = text;
      row.append(rest);
    }
    list.prepend(row);
    while (list.children.length > limit) list.lastElementChild.remove();
  };

  const watch = (target, names, describe) => {
    for (const name of [names].flat()) {
      target.addEventListener(name, (event) => write(name, describe ? describe(event) : event.detail));
    }
  };

  return {write, watch};
};
// </example-helper>

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

// With nothing found the host answers with one note row under the menu's own
// search.empty: a menu given no rows at all closes (still so on ui-98143c0a0728).
const rows = ({total, sites}, current) => (total === 0 ? [{type: 'note', text: 'Попробуйте часть адреса: simai, shop'}] : [
  ...sites.map((site) => ({id: site, text: site, initials: site.slice(0, 2).toUpperCase(), kind: 'radio', checked: site === current})),
  ...(total > sites.length ? [{type: 'note', text: `Показаны ${sites.length} из ${total}; уточните запрос`}] : []),
]);

const initialize = async () => {
  await customElements.whenDefined('sf-menu-context');
  const demo = document.querySelector('[data-context-menu-demo="host-search"]');
  if (!demo || demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const label = demo.querySelector('[data-menu-site]');
  const menu = demo.querySelector('sf-menu-context');
  const log = exampleEventLog(demo.querySelector('[data-example-event-log]'));
  let current = 'example.ru';
  let asked = 0;
  let last = await findSites('');

  menu.search = {placeholder: 'Найти сайт', empty: 'Ничего не найдено', remote: true};
  menu.entries = rows(last, current);

  menu.addEventListener('sf-menu-context-search', async (event) => {
    const query = event.detail.query;
    const ticket = ++asked;
    log.write('sf-menu-context-search', {query});
    const answer = await findSites(query);
    if (ticket !== asked) return; // a newer query came while this one was asked
    last = answer;
    menu.entries = rows(answer, current);
    log.write('entries', `${answer.sites.length} из ${answer.total}`);
  });
  menu.addEventListener('sf-menu-context-select', (event) => {
    current = event.detail.id;
    label.textContent = `Сайт: ${current}`;
    menu.entries = rows(last, current);
    log.write('sf-menu-context-select', {id: event.detail.id});
  });
  anchor.addEventListener('click', () => menu.toggleFor(anchor));
};

initialize();
