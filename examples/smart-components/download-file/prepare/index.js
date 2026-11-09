// Without href the press is the application's: it builds the file, keeps the
// element disabled meanwhile, hands the file to the browser and says what
// happened in a status region.
const saveFile = (text, name, type) => {
  const url = URL.createObjectURL(new Blob([text], {type}));
  const link = Object.assign(document.createElement('a'), {href: url, download: name});
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const buildReport = () => new Promise((done) => setTimeout(() => done(
  'Заказ;Дата;Сумма, ₽\n1040;03.11.2026;12500\n1041;04.11.2026;8900\n1042;05.11.2026;440000\n',
), 1200));

const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  const file = document.querySelector('#download-file-report');
  const status = document.querySelector('#download-file-status');
  if (!file || file.dataset.exampleReady === 'true') return;
  file.dataset.exampleReady = 'true';
  file.addEventListener('sf-file-download-download', async (event) => {
    docara.example.log('sf-file-download-download', event.detail);
    file.setAttribute('disabled', '');
    status.textContent = 'Готовим файл…';
    const text = await buildReport();
    saveFile(text, event.detail.fileName, 'text/csv;charset=utf-8');
    file.removeAttribute('disabled');
    status.textContent = 'Файл скачан.';
    docara.example.log('saved', event.detail.fileName);
  });
};

initialize();
