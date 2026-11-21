// A pretend upload: it reports progress and load like XMLHttpRequest.upload.
const fakeUpload = () => {
  const upload = new EventTarget();
  const total = 12 * 1024 * 1024;
  let loaded = 0;
  const step = () => {
    loaded = Math.min(total, loaded + total / 8);
    upload.dispatchEvent(Object.assign(new Event('progress'), {loaded, total}));
    if (loaded < total) setTimeout(step, 250); else upload.dispatchEvent(new Event('load'));
  };
  setTimeout(step, 250);
  return upload;
};

const initialize = async () => {
  await customElements.whenDefined('sf-progress-bar');
  const progress = document.querySelector('#progress-bar-upload');
  const start = document.querySelector('#progress-bar-upload-start');
  if (!progress || progress.dataset.exampleReady === 'true') return;
  progress.dataset.exampleReady = 'true';

  start.addEventListener('click', () => {
    progress.removeAttribute('status');
    progress.removeAttribute('value-text');
    progress.setAttribute('value', '0');
    const upload = fakeUpload();
    upload.addEventListener('progress', (event) => {
      progress.chunk({done: event.loaded, total: event.total});
    });
    upload.addEventListener('load', () => {
      progress.setAttribute('status', 'success');
      progress.setAttribute('value-text', 'Файлы загружены');
    });
  });
};

initialize();
