// drill: the value stands under the name; a press opens the options in the
// same panel with a way back. A switch stays in its row.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
};

initialize();
