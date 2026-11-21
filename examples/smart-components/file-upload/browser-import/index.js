// Only for this example: the documentation frame has no IndexedDB (its
// origin is opaque), so put() keeps the files in memory. On a site put()
// writes them into IndexedDB; the component part is the same.
const kept = new Map();
const full = () => document.querySelector('sf-switch[name="full"] input')?.checked;
const put = (id, file) => new Promise((resolve, reject) => setTimeout(() => {
  if (full()) reject(new Error('Хранилище переполнено'));
  else { kept.set(id, file); resolve(); }
}, 500));

const initialize = async () => {
  await customElements.whenDefined('sf-file-upload');
  const upload = document.querySelector('sf-file-upload');
  const state = document.querySelector('#file-upload-import-state');
  if (!upload || upload.dataset.exampleReady === 'true') return;
  upload.dataset.exampleReady = 'true';
  const items = new Map(); // id → item

  const report = () => {
    state.textContent = `Сохранено файлов: ${kept.size}`;
  };

  async function store(item) {
    const next = {...item, state: 'process', progress: 10};
    items.set(item.id, next);
    upload.setItems([...items.values()]); // the bar moves
    try {
      if (item.file.size > 5 * 1024 * 1024) throw new Error('Файл больше 5 МБ');
      await put(item.id, item.file);
      items.set(item.id, {...next, state: 'done', progress: 100});
    } catch (error) {
      items.set(item.id, {...next, state: 'error', errorMessage: error.message});
    }
    upload.setItems([...items.values()]);
    report();
  }

  upload.addEventListener('sf-file-upload-attached', async (event) => {
    const item = {...event.detail.item};
    items.set(item.id, item);
    await store(item);
  });

  upload.addEventListener('sf-file-upload-retry', (event) => {
    const item = items.get(event.detail.item.id);
    if (item) store({...item, state: 'process', progress: 0});
  });

  upload.addEventListener('sf-file-upload-detach', (event) => {
    const id = event.detail.item?.id ?? event.detail.id;
    items.delete(id);
    kept.delete(id);
    report();
  });
};

initialize();
