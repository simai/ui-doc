(async () => {
  await customElements.whenDefined('sf-alert-bar');
  const bar = document.querySelector('#phone-bar');
  bar.items = [{id: 'disk', level: 'error', text: 'Диск заполнен на 98 %: сайты перестанут сохранять файлы и базы.', source: 'Сервер', action: {label: 'Освободить место', href: '#disk'}}];
  bar.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());
})();
