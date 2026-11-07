// The pickers only change their value here (apply="none"): the example lists
// the change each one sends instead of switching the page.

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
};

initialize();
