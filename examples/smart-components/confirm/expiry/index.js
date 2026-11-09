// The question can be answered for ten seconds; after that it reads as
// expired and says so once with sf-confirm-expired. «Начать заново» asks
// again with a new time.
const SECONDS = 10;
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const confirm = document.querySelector('sf-confirm');
  const restart = document.querySelector('#confirm-expiry-restart');
  if (!confirm || confirm.dataset.exampleReady === 'true') return;
  confirm.dataset.exampleReady = 'true';
  const ask = () => {
    confirm.setAttribute('expires-at', new Date(Date.now() + SECONDS * 1000).toISOString());
    confirm.state = 'open';
  };
  confirm.addEventListener('sf-confirm-expired', (event) => docara.example.log('sf-confirm-expired', event.detail));
  confirm.addEventListener('sf-confirm-answer', (event) => {
    docara.example.log('sf-confirm-answer', event.detail);
    confirm.state = event.detail.accepted ? 'accepted' : 'declined';
  });
  restart?.addEventListener('click', () => {
    ask();
    docara.example.log('example', `asked again for ${SECONDS} s`);
  });
  ask();
};

initialize();
