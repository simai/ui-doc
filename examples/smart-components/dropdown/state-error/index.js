// The page sets the error and takes it off: «Сохранить» with no status shows
// it again, a choice clears it.
const initialize = async () => {
  await customElements.whenDefined('sf-dropdown');
  const form = document.querySelector('form');
  const status = form?.querySelector('sf-dropdown[name="status"]');
  if (!status || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const empty = !status.value;
    status.setError({message: empty ? 'Выберите статус заявки' : ''});
    docara.example.log('submit', {value: status.value, invalid: empty});
  });
  status.addEventListener('change', () => {
    if (status.value) status.setError({message: ''});
    docara.example.log('change', {value: status.value});
  });
};

initialize();
