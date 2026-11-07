// Without href the press is the application's: it builds the file, keeps the
// element disabled meanwhile and says when it is ready in a status region.
const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  const file = document.querySelector('#download-file-report');
  const status = document.querySelector('#download-file-status');
  if (!file || file.dataset.exampleReady === 'true') return;
  file.dataset.exampleReady = 'true';
  file.addEventListener('sf-file-download-download', (event) => {
    docara.example.log('sf-file-download-download', event.detail);
    file.setAttribute('disabled', '');
    status.textContent = 'Готовим файл…';
    setTimeout(() => {
      file.removeAttribute('disabled');
      status.textContent = 'Файл готов.';
      docara.example.log('готово', event.detail.fileName);
    }, 1500);
  });
};

initialize();
