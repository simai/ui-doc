// An openable tile is one button: a press sends sf-tile-metric-open with the
// element's id, and the page opens the details itself.

const initialize = async () => {
  await customElements.whenDefined('sf-tile-metric');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('sf-tile-metric-open', (event) => {
    docara.example.log('sf-tile-metric-open', event.detail);
  });
};

initialize();
