(async () => {
  const messages = {
    disk: {id: 'disk', level: 'error', text: 'Диск заполнен на 98 %: сайты перестанут сохранять файлы и базы.', source: 'Сервер', time: '2026-11-14T08:58:00+03:00', action: {label: 'Освободить место', href: '#disk'}},
    down: {id: 'down', level: 'error', text: 'shop.example.ru не отвечает уже 12 минут.', source: 'Сайт shop.example.ru', time: '2026-11-14T08:48:00+03:00', action: {label: 'Открыть сайт', href: '#site'}},
    licence: {id: 'licence', level: 'warning', text: 'Лицензия SIMAI Pro заканчивается 30 ноября. После этого обновления перестанут приходить.', source: 'Лицензия', time: '2026-11-14T07:00:00+03:00', action: {label: 'Продлить', href: '#licence'}, acknowledge: {label: 'Прочитано'}},
    trial: {id: 'trial', level: 'info', text: 'Пробный период: осталось 9 дней.', source: 'Тариф', time: '2026-11-14T06:00:00+03:00', action: {label: 'Выбрать тариф', href: '#tariff'}, acknowledge: {label: 'Прочитано'}},
  };
  const sets = {
    one: [messages.licence],
    many: [messages.licence, messages.disk, messages.down, messages.trial],
    error: [messages.disk],
    none: [],
  };
  await Promise.all(['sf-alert-bar', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const bar = document.querySelector('#bar-main');
  const seen = new Set();
  let current = 'many';
  const show = () => { bar.items = sets[current].filter((item) => !seen.has(item.id)); };
  bar.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());
  bar.addEventListener('sf-alert-bar-acknowledge', (event) => { seen.add(event.detail?.id); show(); });
  document.querySelector('#bar-state').addEventListener('sf-button-group-change', (event) => {
    current = event.detail?.value ?? current;
    seen.clear();
    show();
  });
  show();
})();
