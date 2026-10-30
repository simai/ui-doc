// Records one by one; with keys, ArrowLeft and ArrowRight on the page move too.
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-counter');
  if (pager && pager.dataset.exampleReady !== 'true') {
    pager.dataset.exampleReady = 'true';
    pager.items = [{"id": "1040", "title": "Заявка № 1040"}, {"id": "1041", "title": "Заявка № 1041"}, {"id": "1042", "title": "Заявка № 1042"}, {"id": "1043", "title": "Заявка № 1043"}, {"id": "1044", "title": "Заявка № 1044"}, {"id": "1045", "title": "Заявка № 1045"}, {"id": "1046", "title": "Заявка № 1046"}, {"id": "1047", "title": "Заявка № 1047"}, {"id": "1048", "title": "Заявка № 1048"}, {"id": "1049", "title": "Заявка № 1049"}, {"id": "1050", "title": "Заявка № 1050"}, {"id": "1051", "title": "Заявка № 1051"}];
    const status = document.querySelector('#pager-counter-status');
    pager.addEventListener('sf-pager-change', ({detail}) => {
      if (status) status.textContent = detail.complete ? 'Пройдено до конца.' : `Открыто: ${detail.item?.title ?? '—'}.`;
    });
  }
};

initialize();
