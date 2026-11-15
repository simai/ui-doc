// One menu of row actions for the whole list; the page removes a deleted row.
const initializeActionsExample = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-actions');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.actions = [
    {id: 'download', text: 'Скачать', icon: 'download'},
    {id: 'share', text: 'Поделиться', icon: 'share'},
    {id: 'delete', text: 'Удалить', icon: 'delete', destructive: true},
  ];
  list.setItems({items: [
    {id: 'f1', text: 'Прайс-лист.xlsx', supporting: '48 КБ', icon: 'description'},
    {id: 'f2', text: 'Договор поставки.pdf', supporting: '1,2 МБ', icon: 'description'},
    {id: 'f3', text: 'Фото склада.jpg', supporting: '3,4 МБ', icon: 'image'},
  ], options: {hasMore: false}});
  list.addEventListener('sf-list-apply', (event) => {
    if (event.detail.action === 'delete') event.detail.ids.forEach((id) => list.detach(id));
  });
};

initializeActionsExample();
