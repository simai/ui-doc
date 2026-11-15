(async () => {
  await customElements.whenDefined('sf-alert-bar');
  document.querySelectorAll('[data-demo="density-bar"]').forEach((bar) => {
    bar.items = [
      {id: 'licence', level: 'warning', text: 'Лицензия SIMAI Pro заканчивается 30 ноября.', action: {label: 'Продлить', href: '#licence'}, acknowledge: {label: 'Прочитано'}},
      {id: 'trial', level: 'info', text: 'Пробный период: осталось 9 дней.', acknowledge: {label: 'Прочитано'}},
    ];
    bar.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());
  });
})();
