(async () => {
  // Пачка уходит в угол, если файлов больше 10 или загрузка займёт больше 30 секунд.
  const CORNER_FILES = 10;
  const CORNER_SECONDS = 30;
  const SPEED = 2 * 1024 * 1024; // байт в секунду — оценка по последней загрузке
  const toCorner = (files) => files.length > CORNER_FILES || files.reduce((sum, file) => sum + file.size, 0) / SPEED > CORNER_SECONDS;

  const row = (id, name, size, state, progress, error) => ({
    id, name, fileSize: size, state, progress,
    ...(error ? {errorMessage: error, retryText: 'Повторить'} : {}),
  });
  const sample = () => [
    row('a', 'приказ-о-распродаже.pdf', '420 КБ', 'process', 0),
    row('b', 'баннер-1920x600.jpg', '1,8 МБ', 'process', 0),
    row('c', 'цены-ноябрь.xlsx', '96 КБ', 'process', 0),
  ];
  // Панель в углу скрыта и загрузится, когда её покажут: ждём только видимые части.
  await Promise.all(['sf-file-upload', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const upload = document.querySelector('#upload');
  const corner = document.querySelector('#corner');
  const batch = document.querySelector('#batch');
  let timer = 0;

  const stop = () => { clearInterval(timer); timer = 0; };
  const drive = (items, failId) => {
    stop();
    upload.items = items;
    timer = setInterval(() => {
      const next = upload.items.map((item) => {
        if (item.state !== 'process') return item;
        const progress = Math.min(100, (item.progress || 0) + 12);
        if (item.id === failId && progress >= 62) return {...item, state: 'error', progress: 62, errorMessage: 'связь прервалась на 62 %', retryText: 'Повторить'};
        return {...item, progress, state: progress >= 100 ? 'done' : 'process'};
      });
      upload.items = next;
      if (next.every((item) => item.state !== 'process')) {
        stop();
        if (!next.some((item) => item.state === 'error')) SF.notify({status: 'success', title: 'Файлы загружены', text: `${next.length} файла в «Документах».`});
      }
    }, 350);
  };
  const sendToCorner = (total) => {
    stop();
    upload.items = [];
    corner.hidden = false;
    let done = 0;
    batch.setAttribute('total', String(total));
    batch.setAttribute('value', '0');
    batch.setAttribute('run-state', 'running');
    batch.removeAttribute('retryable');
    timer = setInterval(() => {
      done = Math.min(total, done + 3);
      batch.setAttribute('value', String(done));
      batch.setAttribute('remaining', String(Math.round((total - done) * 0.8)));
      if (done < total) return;
      stop();
      batch.setAttribute('run-state', 'partial');
      batch.setAttribute('result-text', `Загружено ${total - 2} из ${total}. Два файла не загрузились.`);
      batch.errors = [{text: 'IMG_2291.HEIC: такие файлы нельзя'}, {text: 'IMG_2307.jpg: связь прервалась'}];
      batch.setAttribute('retryable', '');
    }, 400);
  };
  const show = (state) => {
    stop();
    corner.hidden = true;
    if (state === 'empty') upload.items = [];
    if (state === 'run') drive(sample(), null);
    if (state === 'error') drive(sample(), 'b');
    if (state === 'many') sendToCorner(48);
    if (state === 'done') upload.items = sample().map((item) => ({...item, state: 'done', progress: 100}));
  };

  upload.addEventListener('change', (event) => {
    const files = [...(event.target.files || [])];
    if (!files.length) return;
    if (toCorner(files)) { sendToCorner(files.length); return; }
    drive((upload.items || []).concat(files.map((file, index) => row(`u${Date.now()}${index}`, file.name, `${Math.max(1, Math.round(file.size / 1024))} КБ`, 'process', 0))), null);
  });
  upload.addEventListener('sf-file-upload-retry', () => {
    drive(upload.items.map((item) => item.state === 'error' ? {...item, state: 'process', progress: 62} : item), null);
  });
  batch.addEventListener('sf-progress-run-cancel', () => { stop(); corner.hidden = true; });
  document.querySelector('#upload-state').addEventListener('sf-button-group-change', (event) => show(event.detail?.value ?? 'run'));
  show('run');
})();
