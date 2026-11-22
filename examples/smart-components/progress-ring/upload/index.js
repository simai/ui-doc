// Each file is a pretend upload of a third of a second.
const files = ['Договор.pdf', 'Смета.xlsx', 'План.png', 'Акт.docx'];
const upload = () => new Promise((resolve) => setTimeout(resolve, 350));

const initialize = async () => {
  await customElements.whenDefined('sf-progress-ring');
  const ring = document.querySelector('#progress-ring-upload');
  const state = document.querySelector('#progress-ring-upload-state');
  if (!ring || ring.dataset.exampleReady === 'true') return;
  ring.dataset.exampleReady = 'true';

  document.querySelector('#progress-ring-upload-start').addEventListener('click', async () => {
    ring.removeAttribute('status');
    ring.removeAttribute('value-text');
    ring.setAttribute('value', '0');
    for (const [index, file] of files.entries()) {
      state.textContent = `Загружается ${file}`;
      await upload(file);
      ring.chunk({done: index + 1, total: files.length});
    }
    ring.setAttribute('status', 'success');
    ring.setAttribute('value-text', 'Файлы загружены');
    state.textContent = 'Файлы загружены';
  });
};

initialize();
