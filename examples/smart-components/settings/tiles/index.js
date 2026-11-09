// tiles: the switches marked tile stand on top, three in a row; the rest
// follow as rows.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
};

initialize();
