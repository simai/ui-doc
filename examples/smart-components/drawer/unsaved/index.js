const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['drawer', 'input-textarea']);
  const drawer = document.querySelector('#drawer-example-note');
  // The drawer shows its content in its own panel, so the field is found by id.
  const note = document.querySelector('#drawer-note-text');
  const warning = document.querySelector('#drawer-note-warning');
  const saved = document.querySelector('#drawer-note-saved');
  let savedText = note.value;

  // The drawer only carries the flag; the page decides what is unsaved.
  note.addEventListener('input', () => {
    drawer.unsaved = note.value !== savedText;
    if (!drawer.unsaved) warning.textContent = '';
  });

  // Every close request asks first: the cross, Escape, the backdrop, close().
  drawer.onBeforeClose((event) => {
    if (!event.detail.unsaved) return;
    event.preventDefault();
    warning.textContent = 'Есть несохранённые правки: сохраните их или нажмите «Не сохранять».';
  });

  const finish = () => {
    drawer.unsaved = false;
    warning.textContent = '';
    drawer.close();
  };
  document.querySelector('#drawer-note-save').addEventListener('click', () => {
    savedText = note.value;
    saved.textContent = `Заметка: «${savedText}».`;
    finish();
  });
  document.querySelector('#drawer-note-discard').addEventListener('click', () => {
    note.value = savedText;
    finish();
  });
};

start();
