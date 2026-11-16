// The page sets the error and takes it off: «Сохранить» with no status shows
// it again, a choice clears it. The page checks on the press itself, as a
// form's submit handler does.
const initialize = async () => {
  await customElements.whenDefined('sf-dropdown');
  const status = document.querySelector('sf-dropdown[name="status"]');
  // sf-button hands data-* to its own button, so the attribute is read on either.
  const save = document.querySelector('[data-save]');
  if (!status || !save || status.dataset.exampleReady === 'true') return;
  status.dataset.exampleReady = 'true';
  save.addEventListener('click', () => {
    const empty = !status.value;
    status.setError({message: empty ? 'Выберите статус заявки' : ''});
    docara.example.log('save', {value: status.value, invalid: empty});
  });
  status.addEventListener('change', () => {
    if (status.value) status.setError({message: ''});
    docara.example.log('change', {value: status.value});
  });
};

initialize();
