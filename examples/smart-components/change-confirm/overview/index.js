// A host that lives on this page: the card applies nothing, it raises an
// event and waits. The host answers after a moment and sets the outcome.
const initialize = async () => {
  await customElements.whenDefined('sf-change-confirm');
  const card = document.querySelector('#change-confirm-overview');
  if (!card || card.dataset.exampleReady === 'true') return;
  card.dataset.exampleReady = 'true';
  card.addEventListener('sf-change-confirm-accept', () => { setTimeout(() => { card.state = 'accepted'; }, 800); });
  card.addEventListener('sf-change-confirm-decline', () => { setTimeout(() => { card.state = 'declined'; }, 800); });
};

initialize();
