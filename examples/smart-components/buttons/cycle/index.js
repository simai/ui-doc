// A cycle button steps through its values on every press and says the new
// one in change. The speed button shows each value as its text beside the
// icon; the sort button shows each value as its own icon.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button') return;
    docara.example.log('change', {previous: event.detail.previous, value: event.detail.value});
  });
};

initialize();
