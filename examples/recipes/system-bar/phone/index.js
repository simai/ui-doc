(async () => {
  await customElements.whenDefined('sf-alert-bar');
  const admin = document.querySelector('#phone-admin');
  const site = document.querySelector('#phone-site');
  admin.items = [
    {id: 'disk', level: 'error', text: 'Диск заполнен на 98 %: сайты перестанут сохранять файлы и базы.', source: 'Сервер', action: {label: 'Освободить место', href: '#disk'}},
    {id: 'licence', level: 'warning', text: 'Лицензия SIMAI Pro заканчивается 30 ноября.', action: {label: 'Продлить', href: '#licence'}, acknowledge: {label: 'Прочитано'}},
  ];
  site.items = [{id: 'site', level: 'info', text: 'С 02:00 до 03:00 МСК сайт обновляется: заказы примем после 03:00.'}];
  [admin, site].forEach((bar) => bar.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault()));
})();
