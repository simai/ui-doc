// The answer only reports: the page applies it, then sets the result. Here
// «Удалить» succeeds after a pause, so the waiting state is visible.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const confirm = document.querySelector('sf-confirm');
  if (!confirm || confirm.dataset.exampleReady === 'true') return;
  confirm.dataset.exampleReady = 'true';
  confirm.addEventListener('sf-confirm-answer', (event) => {
    docara.example.log('sf-confirm-answer', event.detail);
    if (!event.detail.accepted) {
      confirm.state = 'declined';
      return;
    }
    setTimeout(() => {
      confirm.state = 'accepted';
      docara.example.log('state', 'accepted');
    }, 1200);
  });
};

initialize();
