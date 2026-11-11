// theme-cycle switches the page's theme through SF.Loader. This example has a
// theme of its own (theme_switch=true on the page), so a press changes the
// theme of the example alone and says the new one in change.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button') return;
    docara.example.log('change', {previous: event.detail.previous, value: event.detail.value});
  });
};

initialize();
