// A file with an address is a link the browser downloads; without one the
// press asks the application to prepare the file. Both send the same event.
const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('sf-file-download-download', (event) => {
    docara.example.log('sf-file-download-download', event.detail);
  });
};

initialize();
