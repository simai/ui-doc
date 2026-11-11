// A notification row: what happened as the title, what it is about as the
// second line, «Новое» on the unread one.
const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#notes-do');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: [
    {id: 'a', text: 'Новый заказ 1042', supporting: 'Анна Белова · 3 490 ₽', icon: 'shopping_bag', badge: {text: 'Новое', tone: 'info'}},
    {id: 'b', text: 'Оплачен заказ 1039', supporting: 'Олег Сафин · 6 750 ₽', icon: 'payments'},
  ], options: {hasMore: false}});
};

initialize();
