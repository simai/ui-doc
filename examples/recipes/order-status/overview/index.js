(async () => {
  const L = ['Заказ принят', 'Собран на складе', 'Передан в службу доставки', 'Получен'];
  const states = {
    packed: {current: 1, items: [{label: L[0], text: '12 ноября, 10:14'}, {label: L[1], text: 'сегодня до 18:00'}, {label: L[2], text: 'ожидается 15 ноября'}, {label: L[3]}]},
    shipping: {current: 2, items: [{label: L[0], text: '12 ноября, 10:14'}, {label: L[1], text: '12 ноября, 15:40'}, {label: L[2], text: '13 ноября, 09:05 · ожидается 15 ноября'}, {label: L[3]}]},
    late: {current: 2, notice: ['warning', 'Доставка задерживается до 17 ноября', 'Склад перевозчика переполнен. Курьер позвонит накануне.'],
      items: [{label: L[0], text: '12 ноября, 10:14'}, {label: L[1], text: '12 ноября, 15:40'}, {label: L[2], text: 'ожидается 17 ноября', state: 'error'}, {label: L[3]}]},
    cancelled: {current: 1, notice: ['error', 'Заказ отменён 12 ноября', 'Товара «Чайник глиняный» не оказалось на складе. Деньги вернутся на карту за 3 дня.'],
      items: [{label: L[0], text: '12 ноября, 10:14'}, {label: L[1], text: 'отменён: нет товара', state: 'error'}, {label: L[2], state: 'skipped'}, {label: L[3], state: 'skipped'}]},
    done: {current: 4, items: [{label: L[0], text: '12 ноября, 10:14'}, {label: L[1], text: '12 ноября, 15:40'}, {label: L[2], text: '13 ноября, 09:05'}, {label: L[3], text: '15 ноября, 14:20'}]},
  };
  const anna = {name: 'Анна Котова', hue: 'teal'};
  const robot = {name: 'Робот', system: true};
  const history = [
    {id: 'h1', icon: 'local_shipping', actor: robot, time: '2026-11-13T09:05:00+03:00', title: 'передал заказ в СДЭК', text: 'Трек 1 234 567 890'},
    {id: 'h2', icon: 'chat_bubble', kind: 'comment', actor: anna, time: '2026-11-12T16:02:00+03:00', title: 'оставила комментарий', text: 'Клиент просит доставку после 18:00.'},
    {id: 'h3', icon: 'swap_horiz', actor: anna, time: '2026-11-12T15:40:00+03:00', title: 'изменила статус', change: {label: 'Статус', before: 'Принят', after: 'Собран'}},
    {id: 'h4', icon: 'edit', actor: anna, time: '2026-11-12T12:10:00+03:00', title: 'изменила адрес', change: {label: 'Адрес', before: 'Покровка, 10', after: 'Покровка, 12, кв. 4'}},
    {id: 'h5', icon: 'shopping_cart', actor: robot, time: '2026-11-12T10:14:00+03:00', title: 'принял заказ', text: '5 070 ₽, оплата картой'},
  ];
  await Promise.all(['sf-steps', 'sf-list-timeline', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const steps = document.querySelector('#order-steps');
  const notice = document.querySelector('#order-notice');
  const show = (name) => {
    const state = states[name];
    steps.items = state.items;
    steps.setAttribute('current', String(state.current));
    notice.replaceChildren();
    if (!state.notice) return;
    const alert = document.createElement('sf-alert');
    alert.setAttribute('status', state.notice[0]);
    alert.setAttribute('heading', state.notice[1]);
    alert.setAttribute('supporting-text', state.notice[2]);
    notice.append(alert);
  };
  document.querySelector('#order-history').items = history;
  document.querySelector('#order-state').addEventListener('sf-button-group-change', (event) => show(event.detail?.value ?? 'shipping'));
  show('shipping');
})();
