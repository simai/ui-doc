// The inherited text shows while the field has none of its own; the reset
// button returns to it after the cancelable sf-field-reset.
const initialize = async () => {
  await customElements.whenDefined('sf-input-textarea');
  const field = document.querySelector('sf-input-textarea[name="signature"]');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.addEventListener('change', () => docara.example.log('change', {value: field.value}));
  field.addEventListener('sf-field-reset', (event) => docara.example.log('sf-field-reset', event.detail));
};

initialize();
