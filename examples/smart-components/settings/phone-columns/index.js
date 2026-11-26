// look="panel": one column list decides the desktop (the check) and the phone (the «На телефоне» switch);
// «Текст в одну строку» and «Линии между столбцами» are table-only settings, shown on the desktop alone.
const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  const settings = document.querySelector('#settings-phone-columns');
  const status = document.querySelector('#settings-phone-status');
  if (!settings || settings.dataset.exampleReady === 'true') return;
  settings.dataset.exampleReady = 'true';
  settings.items = [
    {type: 'group', text: 'Колонки', items: [{id: 'columns', type: 'fields', text: 'Колонки', sortable: true, phoneSwitch: true, options: [
      {id: 'title', text: 'Заказ', checked: true, phone: true, sortable: false, phoneSwitch: false},
      {id: 'client', text: 'Клиент', checked: true, phone: true},
      {id: 'sum', text: 'Сумма', checked: true, phone: true},
      {id: 'status', text: 'Статус', checked: true},
      {id: 'manager', text: 'Менеджер', checked: true},
      {id: 'city', text: 'Город'},
    ]}]},
    {type: 'group', text: 'Вид', items: [
      {id: 'density', type: 'choice', text: 'Плотность', value: 'normal', options: [{id: 'compact', text: 'Плотно'}, {id: 'normal', text: 'Обычно'}]},
      {id: 'nowrap', type: 'switch', text: 'Текст в одну строку', value: false, devices: ['desktop']},
      {id: 'grid', type: 'switch', text: 'Линии между столбцами', value: true, devices: ['desktop']},
    ]},
  ];
  settings.addEventListener('sf-settings-changed', (event) => {
    if (event.detail?.id !== 'columns') return;
    const columns = event.detail.value ?? [];
    const desktop = columns.filter((column) => column.checked).length;
    const phone = columns.filter((column) => column.phone).length;
    status.textContent = `На компьютере колонок: ${desktop}, на телефоне: ${phone}.`;
  });
};

initialize();
