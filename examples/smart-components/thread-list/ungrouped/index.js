// A host that lives on this page: it hands the list its conversations and
// answers what the person does. The list loads nothing by itself.
const day = 24 * 60 * 60 * 1000;
const now = Date.now();
const threads = [
  {id: 't1', title: 'План запуска каталога', updated_at: new Date(now - 20 * 60 * 1000).toISOString(), caption: 'Анна: согласовала макет', unread: 2},
  {id: 't2', title: 'Вопросы по оплате', updated_at: new Date(now - 3 * 60 * 60 * 1000).toISOString(), caption: 'Ассистент: счёт отправлен'},
  {id: 't3', title: 'Отчёт за сентябрь', updated_at: new Date(now - day - 60 * 60 * 1000).toISOString()},
  {id: 't4', title: 'Перенос сайта', updated_at: new Date(now - 5 * day).toISOString(), caption: 'Олег: DNS обновлены'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-thread-list');
  const list = document.querySelector('#thread-list-ungrouped');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setThreads(threads, {hasMore: false});
  list.addEventListener('sf-thread-list-select', (event) => { list.selected = event.detail.id; });
  list.addEventListener('sf-thread-list-archive', (event) => { list.removeThread(event.detail.id); });
};

initialize();
