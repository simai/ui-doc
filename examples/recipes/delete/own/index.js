// A personal filter is deleted at once: nobody else loses it and it can be
// brought back. The toast names what went and offers «Вернуть» for its life.
const views = [
  {id: 'v1', text: 'Мои заказы за неделю', supporting: 'Статус: новый, оплачен', icon: 'filter_alt'},
  {id: 'v2', text: 'Без ответа больше дня', supporting: 'Ответ: нет, создан: больше суток', icon: 'filter_alt'},
  {id: 'v3', text: 'Крупные заказы', supporting: 'Сумма: от 50 000 ₽', icon: 'filter_alt'},
];

const initialize = async () => {
  await Promise.all(['sf-list'].map((tag) => customElements.whenDefined(tag)));
  const list = document.querySelector('#own-views');
  const toasts = document.querySelector('#own-toasts');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  const render = () => list.setItems({items: views, options: {hasMore: false}});
  list.actions = [{id: 'delete', text: 'Удалить', icon: 'delete', destructive: true}];

  list.addEventListener('sf-list-apply', (event) => {
    if (event.detail.action !== 'delete') return;
    const at = views.findIndex((view) => view.id === event.detail.ids[0]);
    if (at < 0) return;
    const [removed] = views.splice(at, 1);
    render();
    const toast = document.createElement('sf-toast');
    toast.setAttribute('icon', 'delete');
    toast.setAttribute('title', `Фильтр «${removed.text}» удалён`);
    toast.setAttribute('action-text', 'Вернуть');
    toast.setAttribute('action', 'undo');
    toast.setAttribute('duration', '8000');
    toast.addEventListener('sf-toast-action', () => {
      views.splice(Math.min(at, views.length), 0, removed);
      render();
      toast.remove();
    });
    toasts.append(toast);
  });

  render();
};

initialize();
