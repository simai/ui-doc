(async () => {
  await Promise.all(['sf-progress-run', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const job = document.querySelector('#job');
  const notice = document.querySelector('#job-notice');
  const corner = document.querySelector('#job-corner');
  const place = document.querySelector('#job-place');
  const hiddenNote = document.querySelector('#job-hidden');
  const live = document.querySelector('#job-live');
  const TOTAL = 12000;
  let done = 0;
  let timer = 0;

  const say = (text) => { live.textContent = text; };
  const steps = (read, write, images) => [
    {id: 'read', title: 'Чтение файла', state: read, ...(read === 'done' ? {duration: 8200} : {})},
    {id: 'write', title: 'Запись товаров', state: write},
    {id: 'images', title: 'Картинки', state: images},
  ];
  const counters = (added, updated, errors) => [
    {id: 'added', label: 'Добавлено', value: added},
    {id: 'updated', label: 'Обновлено', value: updated},
    {id: 'errors', label: '{n} ошибка|{n} ошибки|{n} ошибок', value: errors, status: 'error', zero: 'ошибок нет'},
  ];
  const stop = () => { clearInterval(timer); timer = 0; };
  const both = (name, value) => [job, notice].forEach((run) => (value === null ? run.removeAttribute(name) : run.setAttribute(name, value)));
  const reset = () => {
    stop();
    corner.hidden = true;
    place.hidden = false;
    hiddenNote.hidden = true;
    job.errors = [];
    ['result-text', 'errors-total', 'remaining'].forEach((name) => both(name, null));
  };
  const tick = () => {
    done = Math.min(TOTAL, done + 240);
    both('value', String(done));
    both('remaining', String(Math.round((TOTAL - done) / 240) * 1000));
    job.counters = counters(Math.round(done * 0.75), done - Math.round(done * 0.75), 0);
    if (done >= TOTAL) finish('done');
  };
  const run = (from) => {
    reset();
    done = from;
    both('total', String(TOTAL));
    both('value', String(done));
    both('run-state', 'running');
    job.steps = steps('done', 'running', 'waiting');
    job.counters = counters(Math.round(done * 0.75), done - Math.round(done * 0.75), 0);
    timer = setInterval(tick, 500);
  };
  const finish = (state) => {
    stop();
    both('remaining', null);
    if (state === 'done') {
      both('value', String(TOTAL));
      both('run-state', 'done');
      job.steps = steps('done', 'done', 'done');
      job.counters = counters(9227, 2773, 0);
      both('result-text', 'Загружено 12 000 товаров');
      say('Импорт товаров: готово');
      if (!corner.hidden) SF.notify({status: 'success', title: 'Импорт товаров: готово', text: 'Загружено 12 000 товаров.'});
    }
    if (state === 'partial') {
      both('value', String(TOTAL));
      both('run-state', 'partial');
      job.steps = steps('done', 'done', 'done');
      job.counters = counters(9227, 2755, 18);
      both('errors-total', '18');
      both('result-text', '11 982 товара загружены, 18 строк не загружены — исправьте их и повторите неудачные');
      job.errors = [
        {where: 'строка 218', key: 'TV-55-QL', text: 'нет цены'},
        {where: 'строка 1 042', key: 'HD-200', text: 'артикул повторяется'},
        {where: 'строка 3 310', text: 'пустое название'},
      ];
      say('Импорт товаров: готово с ошибками');
    }
    if (state === 'failed') {
      both('run-state', 'failed');
      job.steps = [{id: 'read', title: 'Чтение файла', state: 'failed', text: 'Лист «Товары» не найден'}, {id: 'write', title: 'Запись товаров', state: 'skipped'}, {id: 'images', title: 'Картинки', state: 'skipped'}];
      both('result-text', 'В файле нет листа «Товары»: переименуйте лист и повторите');
      say('Импорт товаров: не удалось');
    }
  };
  const unknown = () => {
    reset();
    done = 0;
    both('total', null);
    both('value', '0');
    both('run-state', 'running');
    job.steps = [];
    job.counters = [];
    timer = setInterval(() => {
      done += 310;
      both('value', String(done));
      // Как только сервер узнал объём, та же полоса начинает заполняться.
      if (done >= 1550) { stop(); run(done); }
    }, 500);
  };
  const show = (state) => {
    if (state === 'running') run(4812);
    if (state === 'unknown') unknown();
    if (state === 'partial' || state === 'failed' || state === 'done') { reset(); both('total', String(TOTAL)); finish(state); }
  };

  job.addEventListener('sf-progress-run-pause', () => { stop(); both('run-state', 'paused'); say('Импорт товаров на паузе'); });
  job.addEventListener('sf-progress-run-resume', () => { both('run-state', 'running'); timer = setInterval(tick, 500); say('Импорт товаров продолжается'); });
  const cancel = () => { stop(); both('run-state', 'cancelled'); both('remaining', null); corner.hidden = true; place.hidden = false; say('Импорт товаров отменён'); };
  job.addEventListener('sf-progress-run-cancel', cancel);
  notice.addEventListener('sf-progress-run-cancel', cancel);
  job.addEventListener('sf-progress-run-minimize', () => { place.hidden = true; corner.hidden = false; });
  notice.addEventListener('sf-progress-run-expand', () => { corner.hidden = true; place.hidden = false; });
  job.addEventListener('sf-progress-run-retry', (event) => { say('Импорт товаров запущен снова'); run(event.detail?.scope === 'failed' ? TOTAL - 18 : 0); });
  job.addEventListener('sf-progress-run-close', () => { place.hidden = true; hiddenNote.hidden = false; });
  job.addEventListener('sf-progress-run-report', () => say('Полный отчёт об ошибках отдаёт сервер'));
  document.querySelector('#job-state').addEventListener('sf-button-group-change', (event) => show(event.detail?.value ?? 'running'));
  show('running');
})();
