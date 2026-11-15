// The page decides which row is open: it writes the opened id back.
const initializeOpenExample = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-open');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: [
    {id: 'm1', text: 'Заказ № 1042 оплачен', supporting: 'Сегодня, 9:40', icon: 'mail'},
    {id: 'm2', text: 'Отзыв о доставке', supporting: 'Вчера', icon: 'mail'},
    {id: 'm3', text: 'Возврат по заказу № 1017', supporting: '12 ноября', icon: 'mail'},
  ], options: {hasMore: false}});
  list.addEventListener('sf-list-open', (event) => {
    list.selected = event.detail.id;
  });
};

initializeOpenExample();
