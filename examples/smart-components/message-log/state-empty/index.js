// No messages: the empty slot is shown instead of the column.
const initialize = async () => {
  await customElements.whenDefined('sf-message-log');
  const log = document.querySelector('#message-log-empty');
  if (!log || log.dataset.exampleReady === 'true') return;
  log.dataset.exampleReady = 'true';
  log.setMessages([], {hasMore: false});
};

initialize();
