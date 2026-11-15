(async () => {
  const ROWS = [
    {id: '1', title: 'Пуэр «Старое дерево», 100 г', sku: 'PU-0107', status: 'В продаже', stock: '34 шт.', price: '890 ₽'},
    {id: '2', title: 'Улун «Молочный», 50 г', sku: 'OL-0050', status: 'В продаже', stock: '8 шт.', price: '540 ₽'},
    {id: '3', title: 'Чайник глиняный, 250 мл', sku: 'TP-0250', status: 'Нет на складе', stock: '0', price: '2 400 ₽'},
    {id: '4', title: 'Габа «Алишань», 50 г', sku: 'GB-0012', status: 'Черновик', stock: '—', price: '1 150 ₽'},
    {id: '5', title: 'Белый «Шоу Мэй», 100 г', sku: 'WH-0100', status: 'В продаже', stock: '61 шт.', price: '720 ₽'},
  ];
  const COLUMNS = [
    {key: 'title', label: 'Название', list: 'title'},
    {key: 'sku', label: 'Артикул', list: 'supporting'},
    {key: 'status', label: 'Статус', list: 'fact'},
    {key: 'stock', label: 'Остаток', list: 'fact'},
    {key: 'price', label: 'Цена', list: 'fact'},
  ];
  const VIEWS = {all: 'Все товары', drafts: 'Мои черновики', out: 'Нет на складе'};
  await Promise.all(['sf-segmented', 'sf-button', 'sf-settings', 'sf-input', 'sf-view-table'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const table = $('#goods');
  const views = $('#views');
  let query = '';
  let view = 'all';

  const rows = () => ROWS.filter((row) => (!query || (row.title + row.sku).toLowerCase().includes(query))
    && (view !== 'drafts' || row.status === 'Черновик') && (view !== 'out' || row.status === 'Нет на складе'));
  const show = () => {
    const found = rows();
    table.setAttribute('empty-text', 'Ничего не нашлось');
    table.setAttribute('empty-description', 'Уберите условие фильтра или измените запрос.');
    table.rows = found;
  };
  table.columns = COLUMNS;
  show();

  // Сохранённые виды — кнопка с меню сразу после фильтра и колонок; «Сохранить как вид» — последним.
  views.menu = [
    {id: 'all', text: VIEWS.all},
    {id: 'drafts', text: VIEWS.drafts},
    {id: 'out', text: VIEWS.out},
    {kind: 'separator'},
    {id: 'save', text: 'Сохранить как вид…', icon: 'bookmark_add'},
  ];
  views.addEventListener('sf-button-select', (event) => {
    const id = event.detail?.id;
    if (!VIEWS[id]) return;
    view = id;
    views.setAttribute('text', VIEWS[id]);
    show();
  });
  $('#filter').items = [
    {type: 'group', text: 'Статус', items: [
      {id: 'st-sale', type: 'switch', text: 'В продаже', value: true},
      {id: 'st-out', type: 'switch', text: 'Нет на складе', value: false},
      {id: 'st-draft', type: 'switch', text: 'Черновик', value: false},
    ]},
    {type: 'group', text: 'Цена', items: [{id: 'price', type: 'range', text: 'До', value: 3000, min: 0, max: 5000, step: 100, unit: '₽'}]},
  ];
  $('#columns').items = [
    {type: 'group', text: 'Колонки', items: [{id: 'columns', type: 'fields', text: 'Колонки', sortable: true, pinnable: true, options: [
      {id: 'title', text: 'Название', checked: true, pinned: true},
      {id: 'sku', text: 'Артикул', checked: true},
      {id: 'status', text: 'Статус', checked: true},
      {id: 'stock', text: 'Остаток', checked: true},
      {id: 'price', text: 'Цена', checked: true},
      {id: 'brand', text: 'Производитель'},
      {id: 'changed', text: 'Изменено'},
    ]}]},
  ];
  $('#search').addEventListener('input', () => {
    query = String($('#search').value ?? '').trim().toLowerCase();
    show();
  });
  $('#layout').addEventListener('sf-button-group-change', (event) => table.setAttribute('layout', event.detail?.value ?? 'table'));
  $('#table-state').addEventListener('sf-button-group-change', (event) => {
    const state = event.detail?.value;
    table.setAttribute('data-state', 'auto');
    $('#filter-button').setAttribute('text', state === 'filtered' ? 'Фильтр · 2' : 'Фильтр');
    if (state === 'ready') show();
    if (state === 'filtered') table.rows = ROWS.filter((row) => row.status === 'В продаже');
    if (state === 'nothing') {
      table.rows = [];
      table.setAttribute('empty-text', 'Ничего не нашлось');
      table.setAttribute('empty-description', 'Уберите условие фильтра или измените запрос.');
      table.setAttribute('data-state', 'empty');
    }
    if (state === 'loading') table.setAttribute('data-state', 'loading');
    if (state === 'error') { table.setAttribute('error-text', 'Не удалось загрузить товары'); table.setAttribute('data-state', 'error'); }
  });
})();
