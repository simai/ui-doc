// The same rows on the three steps of the size ladder.
const rows = [
  {id: 's1', text: 'Письмо-приглашение', supporting: 'Шаблон', icon: 'mail'},
  {id: 's2', text: 'Счёт', supporting: 'Шаблон', icon: 'receipt'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list');
  for (const list of document.querySelectorAll('[data-list-sizes-example]')) {
    if (list.dataset.exampleReady === 'true') continue;
    list.dataset.exampleReady = 'true';
    list.setItems(rows, {hasMore: false});
  }
};

initialize();
