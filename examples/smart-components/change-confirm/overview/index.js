// A host that lives on this page: the card applies nothing, it raises an
// event and waits. The host answers after a moment and sets the outcome.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm-change');
  const card = document.querySelector('#change-confirm-overview');
  if (!card || card.dataset.exampleReady === 'true') return;
  card.dataset.exampleReady = 'true';
  card.addEventListener('sf-change-confirm-answer', (event) => { setTimeout(() => { card.state = event.detail.accepted ? 'accepted' : 'declined'; }, 800); });
};

initialize();
