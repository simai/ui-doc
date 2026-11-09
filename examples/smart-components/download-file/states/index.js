// «Повторить» under a file that could not be prepared sends
// sf-file-download-retry; the page prepares it again (here it fails once more).
const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  const file = document.querySelector('#download-file-failed');
  if (!file || file.dataset.exampleReady === 'true') return;
  file.dataset.exampleReady = 'true';
  file.addEventListener('sf-file-download-retry', (event) => {
    docara.example.log('sf-file-download-retry', event.detail);
    file.setAttribute('state', 'preparing');
    setTimeout(() => file.setAttribute('state', 'error'), 1500);
  });
};

initialize();
