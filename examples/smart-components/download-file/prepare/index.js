// Without href the press is the application's: it cancels the request, sets
// state="preparing" while it builds the file, then gives the size, the href
// and state="ready"; the element fetches the file the person pressed for once.
const buildReport = () => new Promise((done) => setTimeout(() => done(
  'Заказ;Дата;Сумма, ₽\n1040;03.11.2026;12500\n1041;04.11.2026;8900\n1042;05.11.2026;440000\n',
), 1200));

const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  const file = document.querySelector('#download-file-report');
  if (!file || file.dataset.exampleReady === 'true') return;
  file.dataset.exampleReady = 'true';
  file.addEventListener('sf-file-download-download', async (event) => {
    docara.example.log('sf-file-download-download', event.detail);
    if (file.getAttribute('href')) return;
    event.preventDefault();
    file.setAttribute('state', 'preparing');
    docara.example.log('state', 'preparing');
    const text = await buildReport();
    const report = new Blob([text], {type: 'text/csv;charset=utf-8'});
    // The size of the built file is known here: with file-size set the
    // element does not ask the address for it.
    file.setAttribute('file-size', `${report.size} Б`);
    file.setAttribute('href', URL.createObjectURL(report));
    file.setAttribute('state', 'ready');
    docara.example.log('state', 'ready');
  });
};

initialize();
