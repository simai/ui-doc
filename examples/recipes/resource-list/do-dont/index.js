// Two lists with the same three sites: the first marks only the site with a
// problem, the second puts a status badge on every row.
const rows = [
  {id: 'a', text: 'Магазин', supporting: 'nord-wind.ru', icon: 'storefront'},
  {id: 'b', text: 'Блог', supporting: 'travel-notes.ru', icon: 'article', badge: {text: 'Сертификат', tone: 'warning'}},
  {id: 'c', text: 'Визитка', supporting: 'simai.example', icon: 'language'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const good = document.querySelector('#rows-do');
  const bad = document.querySelector('#rows-dont');
  if (!good || good.dataset.exampleReady === 'true') return;
  good.dataset.exampleReady = 'true';
  good.setItems({items: rows, options: {hasMore: false}});
  bad.setItems({items: rows.map((row) => ({...row, badge: row.badge ?? {text: 'Работает', tone: 'success'}})), options: {hasMore: false}});
};

initialize();
