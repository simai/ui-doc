// The question expires five seconds after the example opens and says so once
// with sf-confirm-expired.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const confirm = document.querySelector('sf-confirm');
  if (!confirm || confirm.dataset.exampleReady === 'true') return;
  confirm.dataset.exampleReady = 'true';
  confirm.addEventListener('sf-confirm-expired', (event) => docara.example.log('sf-confirm-expired', event.detail));
  confirm.addEventListener('sf-confirm-answer', (event) => {
    docara.example.log('sf-confirm-answer', event.detail);
    confirm.state = event.detail.accepted ? 'accepted' : 'declined';
  });
  confirm.setAttribute('expires-at', new Date(Date.now() + 5000).toISOString());
};

initialize();
