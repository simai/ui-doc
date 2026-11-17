(async () => {
  await customElements.whenDefined('sf-progress-run');
  const run = (state) => document.querySelector(`[data-state="${state}"]`);
  run('queued').steps = [
    {id: 'dump', title: 'Выгрузка базы', state: 'waiting'},
    {id: 'pack', title: 'Упаковка файлов', state: 'waiting'},
    {id: 'send', title: 'Отправка в хранилище', state: 'waiting'},
  ];
  run('partial').counters = [
    {id: 'added', label: 'Добавлено', value: 9227},
    {id: 'updated', label: 'Обновлено', value: 2755},
    {id: 'errors', label: '{n} ошибка|{n} ошибки|{n} ошибок', value: 18, status: 'error'},
  ];
  run('partial').errors = [
    {where: 'строка 218', key: 'TV-55-QL', text: 'нет цены'},
    {where: 'строка 1 042', key: 'HD-200', text: 'артикул повторяется'},
  ];
  run('failed').steps = [
    {id: 'dns', title: 'Адрес сайта', state: 'done', duration: 1200},
    {id: 'files', title: 'Файлы сайта', state: 'failed', text: 'Не хватает места на диске'},
    {id: 'ssl', title: 'Сертификат', state: 'skipped'},
  ];
  run('done').steps = [
    {id: 'dump', title: 'Выгрузка базы', state: 'done', duration: 8200},
    {id: 'pack', title: 'Упаковка файлов', state: 'done', duration: 61000},
    {id: 'send', title: 'Отправка в хранилище', state: 'done', duration: 12400},
  ];
})();
