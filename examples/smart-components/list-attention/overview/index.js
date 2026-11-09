// A link action asks sf-list-attention-navigate (cancelable: a router goes
// there itself); a button action sends sf-list-attention-apply, and the host
// does the work and sets the list again.
const initialize = async () => {
  await customElements.whenDefined('sf-list-attention');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const list = document.querySelector('sf-list-attention');
  list.addEventListener('sf-list-attention-navigate', (event) => {
    event.preventDefault();
    docara.example.log('sf-list-attention-navigate', event.detail);
  });
  list.addEventListener('sf-list-attention-apply', (event) => {
    docara.example.log('sf-list-attention-apply', event.detail);
    if (event.detail.action === 'restart') list.items = list.items.filter((item) => item.id !== event.detail.id);
  });
};

initialize();
