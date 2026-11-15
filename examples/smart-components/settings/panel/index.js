// look="panel": a filter applied by a button and a column list applied at once.
const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  const filter = document.querySelector('#settings-panel-filter');
  const columns = document.querySelector('#settings-panel-columns');
  const status = document.querySelector('#settings-panel-status');
  if (!filter || filter.dataset.exampleReady === 'true') return;
  filter.dataset.exampleReady = 'true';
  filter.items = [
    {type: 'group', text: 'Статус', items: [
      {id: 'sale', type: 'switch', text: 'В продаже', value: true},
      {id: 'out', type: 'switch', text: 'Нет на складе', value: false},
      {id: 'draft', type: 'switch', text: 'Черновик', value: false},
    ]},
    {type: 'group', text: 'Цена', items: [{id: 'price', type: 'range', text: 'До', value: 3000, min: 0, max: 5000, step: 100, unit: '₽'}]},
  ];
  columns.items = [
    {type: 'group', text: 'Колонки', items: [{id: 'columns', type: 'fields', text: 'Колонки', sortable: true, pinnable: true, options: [
      {id: 'title', text: 'Название', checked: true, pinned: true},
      {id: 'sku', text: 'Артикул', checked: true},
      {id: 'status', text: 'Статус', checked: true},
      {id: 'stock', text: 'Остаток', checked: true},
      {id: 'price', text: 'Цена', checked: true},
      {id: 'brand', text: 'Производитель'},
      {id: 'changed', text: 'Изменено'},
    ]}]},
    {type: 'group', text: 'Порядок', items: [{id: 'sort', type: 'choice', text: 'Сначала', value: 'new', options: [{id: 'new', text: 'Новые'}, {id: 'cheap', text: 'Дешёвые'}, {id: 'name', text: 'По названию'}]}]},
  ];
  filter.addEventListener('sf-settings-changed', () => { status.textContent = 'Фильтр применён.'; });
  columns.addEventListener('sf-settings-changed', () => { status.textContent = 'Колонки изменены.'; });
};

initialize();
