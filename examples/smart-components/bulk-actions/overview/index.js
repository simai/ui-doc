const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['bulk-actions', 'checkbox']);
  const bar = document.querySelector('#bulk-bar');
  const list = document.querySelector('#bulk-orders');
  let archived = [];

  bar.actions = [
    {id: 'paid', text: 'Отметить оплаченными', icon: 'payments', 'done-text': 'Отмечено'},
    {id: 'export', text: 'Экспорт', icon: 'download', 'done-text': 'Выгружено'},
    {id: 'archive', text: 'В архив', icon: 'archive', undo: true},
    {id: 'delete', text: 'Удалить', icon: 'delete', status: 'danger', 'done-text': 'Удалено'},
  ];

  // The list owns the selection: it writes count on every change.
  const boxes = () => [...list.querySelectorAll('sf-checkbox')];
  const selected = () => boxes().filter((box) => box.checked);
  const update = () => {
    bar.count = selected().length;
    bar.pageCount = boxes().length;
  };
  list.addEventListener('change', update);

  // The bar asks (and asks again before a dangerous action); the list does the work.
  bar.addEventListener('sf-bulk-actions-action', (event) => {
    const {id} = event.detail;
    const rows = selected().map((box) => box.closest('li'));
    if (id === 'archive') archived = rows;
    if (id === 'archive' || id === 'delete') rows.forEach((row) => row.remove());
    else selected().forEach((box) => { box.checked = false; });
    bar.result({id, ok: rows.length, failed: []});
    update();
  });

  // «Отменить» in the notice of a reversible action: the list puts the rows back.
  bar.addEventListener('sf-bulk-actions-undo', () => {
    archived.forEach((row) => { row.querySelector('sf-checkbox').checked = false; });
    const order = (row) => Number(row.querySelector('sf-checkbox').dataset.id);
    list.append(...[...list.children, ...archived].sort((a, b) => order(a) - order(b)));
    archived = [];
    update();
  });

  // × and Escape: the list drops its selection.
  bar.addEventListener('sf-bulk-actions-clear', () => {
    boxes().forEach((box) => { box.checked = false; });
    update();
  });
};

start();
