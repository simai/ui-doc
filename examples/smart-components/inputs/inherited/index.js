// Until the field has a value of its own it shows the inherited one; the
// reset button returns to it and sends the cancelable sf-field-reset first.
const initialize = async () => {
  await customElements.whenDefined('sf-input');
  const field = document.querySelector('sf-input[name="sender"]');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.addEventListener('change', () => docara.example.log('change', {value: field.value}));
  field.addEventListener('sf-field-reset', (event) => docara.example.log('sf-field-reset', event.detail));
};

initialize();
