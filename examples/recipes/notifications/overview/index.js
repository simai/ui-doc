// Notifications open from the bell in the bar. Unread rows carry a «Новое»
// badge and the bell counts them; opening a row reads it, «Прочитать все»
// reads every row, and «Непрочитанные» shows only what is left. Rows are
// grouped by day in the reader's time zone.
const now = new Date();
const at = (days, hours, minutes) => {
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
};
const notes = [
  {id: 'n1', text: 'Новый заказ 1042', supporting: 'Анна Белова · 3 490 ₽', icon: 'shopping_bag', date: at(0, 9, 41), unread: true},
  {id: 'n2', text: 'Резервная копия не создана', supporting: 'Нет места на диске', icon: 'error', date: at(0, 4, 0), unread: true},
  {id: 'n3', text: 'Отзыв о товаре «Термокружка»', supporting: '5 звёзд · «Держит тепло весь день»', icon: 'reviews', date: at(1, 18, 12), unread: true},
  {id: 'n4', text: 'Оплачен заказ 1039', supporting: 'Олег Сафин · 6 750 ₽', icon: 'payments', date: at(1, 11, 30)},
  {id: 'n5', text: 'Сертификат продлён', supporting: 'nord-wind.ru до 14 декабря', icon: 'verified', date: at(3, 10, 0)},
];

const initialize = async () => {
  await Promise.all(['sf-list', 'sf-popover', 'sf-segmented', 'sf-button-icon'].map((tag) => customElements.whenDefined(tag)));
  const root = document.querySelector('#notify-root');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  const list = document.querySelector('#notify-list');
  const bell = document.querySelector('#notify-bell');
  const filter = document.querySelector('#notify-filter');
  const readAll = document.querySelector('#notify-read-all');
  let shown = 'all';

  const render = () => {
    const unread = notes.filter((note) => note.unread).length;
    const rows = notes
      .filter((note) => shown === 'all' || note.unread)
      .map(({unread: isUnread, ...note}) => ({...note, badge: isUnread ? {text: 'Новое', tone: 'info'} : undefined}));
    list.setItems({items: rows, options: {hasMore: false}});
    bell.setAttribute('badge-count', String(unread));
    bell.setAttribute('badge-label', unread ? `${unread} непрочитанных` : '');
    filter.items = [{value: 'all', label: 'Все'}, {value: 'unread', label: 'Непрочитанные', count: unread}];
    filter.value = shown;
    readAll.toggleAttribute('disabled', !unread);
  };

  list.addEventListener('sf-list-open', (event) => {
    const note = notes.find((entry) => entry.id === event.detail.id);
    if (note) note.unread = false;
    render();
  });
  readAll.addEventListener('click', () => {
    notes.forEach((note) => { note.unread = false; });
    render();
    docara.example.log('read-all', {});
  });
  filter.addEventListener('change', (event) => {
    shown = event.detail.value;
    render();
  });

  render();
};

initialize();
