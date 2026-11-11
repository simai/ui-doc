// The list owns the layout only: the page gives the rows, writes back the
// open row and does what an action asks. The example log shows the events.
const letters = [
  {id: 'l1', text: 'Приглашение на вебинар', supporting: 'Изменено 27 октября', icon: 'mail'},
  {id: 'l2', text: 'Новости ноября', supporting: 'Черновик', icon: 'mail'},
  {id: 'l3', text: 'Счёт за октябрь', supporting: 'Отправлено 3 210 адресатам', icon: 'mail'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-overview');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.actions = [
    {id: 'copy', text: 'Копировать', icon: 'content_copy'},
    {id: 'delete', text: 'Удалить', icon: 'delete', destructive: true},
  ];
  list.setItems({items: letters, options: {hasMore: false}});
  list.selected = 'l2';
  list.addEventListener('sf-list-open', (event) => {
    list.selected = event.detail.id;
  });
  list.addEventListener('sf-list-apply', (event) => {
    const [id] = event.detail.ids;
    if (event.detail.action === 'delete') list.detach(id);
  });
};

initialize();
