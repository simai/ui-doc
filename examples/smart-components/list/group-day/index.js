// group-by="day" groups by the calendar day of each row's date in the
// reader's time zone; the dates here are counted from now.
const hoursAgo = (hours) => new Date(Date.now() - hours * 3600 * 1000).toISOString();

const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-group-day');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: [
    {id: 't1', text: 'Возврат товара', supporting: 'Ассистент: оформите заявку…', date: hoursAgo(0.5)},
    {id: 't2', text: 'План на квартал', supporting: 'Вы: пришлю завтра', date: hoursAgo(26)},
    {id: 't3', text: 'Доступ к отчётам', date: hoursAgo(28)},
    {id: 't4', text: 'Тарифы', date: hoursAgo(24 * 9)},
  ], options: {hasMore: false}});
};

initialize();
