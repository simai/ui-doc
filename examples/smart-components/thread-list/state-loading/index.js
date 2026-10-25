// While the first page loads the list shows its shape and says it is busy.
const initialize = async () => {
  await customElements.whenDefined('sf-thread-list');
  const list = document.querySelector('#thread-list-loading');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setLoading(true);
};

initialize();
