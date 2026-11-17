// The page decides whether the person may leave the record: it cancels the
// request while the record has unsaved edits.
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-validation');
  if (!pager || pager.dataset.exampleReady === 'true') return;
  pager.dataset.exampleReady = 'true';
  pager.items = [{id: '1040', title: 'Заявка № 1040'}, {id: '1041', title: 'Заявка № 1041'}, {id: '1042', title: 'Заявка № 1042'}, {id: '1043', title: 'Заявка № 1043'}];
  const dirty = document.querySelector('#pager-validation-dirty');
  const status = document.querySelector('#pager-validation-status');
  pager.addEventListener('sf-pager-navigate', (event) => {
    if (dirty.checked) {
      event.preventDefault();
      status.textContent = 'Сначала сохраните правки в заявке.';
    }
  });
  pager.addEventListener('sf-pager-change', ({detail}) => {
    status.textContent = `Открыта ${detail.item?.title ?? 'заявка'}.`;
  });
};

initialize();
