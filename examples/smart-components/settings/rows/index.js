// rows: the name at the start, the control at the end -- short options in a
// row, a switch, a slider. Everything is seen at once.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
};

initialize();
