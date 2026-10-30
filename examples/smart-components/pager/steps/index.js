// A wizard: the page gives the steps, the pager draws the place and the buttons.
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-steps');
  if (pager && pager.dataset.exampleReady !== 'true') {
    pager.dataset.exampleReady = 'true';
    pager.items = [{"id": "source", "title": "Источник"}, {"id": "fields", "title": "Поля"}, {"id": "check", "title": "Проверка"}, {"id": "import", "title": "Импорт"}];
    const status = document.querySelector('#pager-steps-status');
    pager.addEventListener('sf-pager-change', ({detail}) => {
      if (status) status.textContent = detail.complete ? 'Пройдено до конца.' : `Открыто: ${detail.item?.title ?? '—'}.`;
    });
  }
};

initialize();
