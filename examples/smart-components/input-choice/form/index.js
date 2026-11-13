// The field takes part in the form like native radios and checkboxes: one
// entry for one option, one entry per value for several, nothing when nothing
// is chosen; required stops the submit until a card is chosen.
const initialize = async () => {
  await customElements.whenDefined('sf-input-choice');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const form = document.querySelector('#choice-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    docara.example.log('submit', {delivery: data.getAll('delivery'), targets: data.getAll('targets')});
  });
  form.addEventListener('reset', () => docara.example.log('reset', 'значения вернулись к атрибуту value'));
};

initialize();
