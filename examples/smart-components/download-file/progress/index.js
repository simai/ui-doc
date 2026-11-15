// A long build: the application reports the share done through value (the
// ring and «Готовим… 45 %») and lets the person stop it with «Отменить»
// (cancelable). The cancel event is left unprevented, so the row is ready
// again at once and the application only stops its own work.
const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  const file = document.querySelector('#download-file-archive');
  if (!file || file.dataset.exampleReady === 'true') return;
  file.dataset.exampleReady = 'true';
  let timer = 0;
  const stop = () => {
    clearInterval(timer);
    timer = 0;
    file.removeAttribute('value');
  };
  file.addEventListener('sf-file-download-request', (event) => {
    docara.example.log('sf-file-download-request', event.detail);
    if (file.getAttribute('href')) return;
    event.preventDefault();
    let done = 0;
    file.setAttribute('value', '0');
    file.setAttribute('state', 'preparing');
    timer = setInterval(() => {
      done += 5;
      file.setAttribute('value', String(done));
      if (done < 100) return;
      stop();
      const archive = new Blob(['SIMAI Framework'], {type: 'application/zip'});
      file.setAttribute('file-size', '18,6 МБ');
      file.setAttribute('href', URL.createObjectURL(archive));
      file.setAttribute('state', 'ready');
      docara.example.log('state', 'ready');
    }, 300);
  });
  file.addEventListener('sf-file-download-cancel', (event) => {
    docara.example.log('sf-file-download-cancel', event.detail);
    stop();
  });
};

initialize();
