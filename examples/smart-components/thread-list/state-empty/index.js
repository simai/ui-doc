// No conversations yet: the list says so and offers a new one.
const initialize = async () => {
  await customElements.whenDefined('sf-thread-list');
  const list = document.querySelector('#thread-list-empty');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setThreads([], {hasMore: false});
};

initialize();
