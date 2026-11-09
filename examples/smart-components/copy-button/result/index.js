// The button reports the copied text, or why it could not copy.
const initialize = async () => {
  await customElements.whenDefined('sf-button-copy');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('sf-button-copy-copied', (event) => docara.example.log('sf-button-copy-copied', event.detail));
  document.addEventListener('sf-button-copy-copy-failed', (event) => docara.example.log('sf-button-copy-copy-failed', event.detail));
};

initialize();
