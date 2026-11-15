(async () => {
  const NEWS = [
    {id: '1', title: 'Осенняя распродажа: скидки до 30 %', status: 'Опубликовано', author: 'Анна Котова', date: '14 ноября'},
    {id: '2', title: 'Новые улуны из Фуцзяня', status: 'Черновик', author: 'Сергей Иванов', date: '13 ноября'},
    {id: '3', title: 'График работы в праздники', status: 'Опубликовано', author: 'Анна Котова', date: '10 ноября'},
    {id: '4', title: 'Как заваривать пуэр', status: 'Опубликовано', author: 'Ирина Котова', date: '2 ноября'},
    {id: '5', title: 'Мастер-класс 23 ноября', status: 'Запланировано', author: 'Сергей Иванов', date: '1 ноября'},
  ];
  const word = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'новость' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'новости' : 'новостей');
  await Promise.all(['sf-view-table', 'sf-button'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const table = $('#news');
  let rows = NEWS.slice();
  let selected = [];

  table.columns = [
    {key: 'title', label: 'Название', list: 'title'},
    {key: 'status', label: 'Статус', list: 'fact'},
    {key: 'author', label: 'Автор', list: 'supporting'},
    {key: 'date', label: 'Дата', list: 'supporting'},
  ];
  table.rows = rows;

  // Выбрана хотя бы одна строка — панель над списком сменяется строкой «Выбрано N».
  const showSelection = (ids) => {
    selected = ids;
    $('#selection-bar').hidden = !ids.length;
    $('#list-bar').hidden = ids.length > 0;
    $('#selected-count').textContent = `Выбрано ${ids.length}`;
  };
  const clear = () => { table.clearSelection?.(); showSelection([]); };
  table.addEventListener('sf-view-table-select', (event) => showSelection(event.detail?.ids ?? []));
  $('#clear').addEventListener('click', clear);

  $('#publish').addEventListener('click', () => {
    SF.notify({status: 'success', title: `Опубликовано: ${selected.length} ${word(selected.length)}`});
    clear();
  });
  $('#unpublish').addEventListener('click', () => {
    const ids = selected.slice();
    SF.notify({status: 'success', title: `Снято с публикации: ${ids.length} ${word(ids.length)}`, action: {label: 'Вернуть', onSelect: () => {}}});
    clear();
  });
  $('#remove').addEventListener('click', async () => {
    const ids = selected.slice();
    const question = `Удалить ${ids.length} ${word(ids.length)}?`;
    const confirm = $('#delete-question');
    confirm.setAttribute('question', question);
    confirm.setAttribute('accept-text', `Удалить ${ids.length} ${word(ids.length)}`);
    const modal = $('sf-modal[modal-id="delete-news"]');
    modal.setAttribute('heading', question);
    await customElements.whenDefined('sf-modal');
    modal.open();
    confirm.addEventListener('sf-confirm-answer', (event) => {
      modal.close();
      if (!event.detail?.accepted) return;
      const before = rows;
      rows = rows.filter((row) => !ids.includes(row.id));
      table.rows = rows;
      clear();
      SF.notify({status: 'neutral', icon: 'delete', title: `Удалено ${ids.length} ${word(ids.length)}`,
        action: {label: 'Отменить', onSelect: () => { rows = before; table.rows = rows; }}});
    }, {once: true});
  });
})();
