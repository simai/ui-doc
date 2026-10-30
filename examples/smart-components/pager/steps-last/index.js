// The last step: Next says «Готово» and finishes the walk.
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-steps-last');
  if (pager && pager.dataset.exampleReady !== 'true') {
    pager.dataset.exampleReady = 'true';
    pager.items = [{"id": "source", "title": "Источник"}, {"id": "fields", "title": "Поля"}, {"id": "check", "title": "Проверка"}, {"id": "import", "title": "Импорт"}];
  }
};

initialize();
