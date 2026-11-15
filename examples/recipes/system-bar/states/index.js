(async () => {
  const disk = {id: 'disk', level: 'error', text: 'Диск заполнен на 98 %: сайты перестанут сохранять файлы и базы.', source: 'Сервер', action: {label: 'Освободить место', href: '#disk'}};
  const licence = {id: 'licence', level: 'warning', text: 'Лицензия SIMAI Pro заканчивается 30 ноября.', source: 'Лицензия', action: {label: 'Продлить', href: '#licence'}, acknowledge: {label: 'Прочитано'}};
  const trial = {id: 'trial', level: 'info', text: 'Пробный период: осталось 9 дней.', source: 'Тариф', acknowledge: {label: 'Прочитано'}};
  const site = {id: 'site', level: 'info', text: 'С 02:00 до 03:00 МСК сайт обновляется: заказы примем после 03:00.'};
  await customElements.whenDefined('sf-alert-bar');
  const put = (id, items) => {
    const bar = document.querySelector(id);
    bar.items = items;
    bar.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());
  };
  put('#st-error', [disk]);
  put('#st-warning', [licence]);
  put('#st-many', [disk, licence, trial]);
  put('#st-site', [site]);
})();
