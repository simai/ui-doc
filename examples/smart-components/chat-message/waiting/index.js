// The answer is being written: the stage line stands in its place.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-message');
  const node = document.querySelector('#chat-message-waiting');
  if (!node || node.dataset.exampleReady === 'true') return;
  node.dataset.exampleReady = 'true';
  node.message = {id: 'msg_04', role: 'assistant', status: 'running', stage: 'writing'};
};

initialize();
