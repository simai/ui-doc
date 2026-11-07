// A button opens the panel; a choice drills in, a switch turns in its row.
// The log lists the request (change) and the fact (changed).

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
};

initialize();
