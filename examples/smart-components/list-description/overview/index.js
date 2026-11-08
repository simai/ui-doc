// A value link asks sf-list-description-navigate first: a page with a router
// cancels it and goes there itself; here the request is shown in the log.
const initialize = async () => {
  await customElements.whenDefined('sf-list-description');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.querySelector('sf-list-description').addEventListener('sf-list-description-navigate', (event) => {
    event.preventDefault();
    docara.example.log('sf-list-description-navigate', event.detail);
  });
};

initialize();
