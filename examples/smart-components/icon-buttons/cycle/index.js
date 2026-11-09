// A cycle button steps through its values on every press and says the new
// one in change; theme-cycle does the same over the page's theme.
const initialize = async () => {
  await customElements.whenDefined('sf-button-icon');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button-icon') return;
    docara.example.log('change', {previous: event.detail.previous, value: event.detail.value});
  });
};

initialize();
