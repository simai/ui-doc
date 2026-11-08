// The host drives the run: it changes one step at a time with step(), appends
// the output with chunk(), and answers Cancel, Retry and Hide. Here a timer
// plays a job that creates a site.
const STEPS = [
  {id: 'dns', title: 'Адрес demo.test', state: 'waiting'},
  {id: 'files', title: 'Файлы сайта', state: 'waiting'},
  {id: 'db', title: 'База данных', state: 'waiting'},
  {id: 'ssl', title: 'Сертификат', state: 'waiting'},
];
const OUTPUT = {dns: 'DNS: ok', files: 'Copying 120 files... ok', db: 'Creating tables... ok', ssl: 'Certificate issued'};

const initialize = async () => {
  await customElements.whenDefined('sf-progress-run');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const run = document.querySelector('#run-overview');
  let timer = null;
  const start = () => {
    clearTimeout(timer);
    run.steps = STEPS.map((step) => ({...step}));
    run.setAttribute('run-state', 'auto');
    run.removeAttribute('result-text');
    run.clear();
    run.chunk({text: '$ create-site demo.test\n'});
    let index = 0;
    const next = () => {
      if (index > 0) {
        const done = STEPS[index - 1].id;
        run.step({id: done, state: 'done', duration: 900});
        run.chunk({text: `${OUTPUT[done]}\n`});
      }
      if (index === STEPS.length) {
        run.setAttribute('result-text', 'Сайт создан');
        return;
      }
      run.step({id: STEPS[index].id, state: 'running', started: new Date().toISOString()});
      index += 1;
      timer = setTimeout(next, 900);
    };
    next();
  };
  run.addEventListener('sf-progress-run-cancel', (event) => {
    docara.example.log('sf-progress-run-cancel', event.detail);
    clearTimeout(timer);
    run.setAttribute('run-state', 'cancelled');
  });
  run.addEventListener('sf-progress-run-retry', (event) => {
    docara.example.log('sf-progress-run-retry', event.detail);
    start();
  });
  run.addEventListener('sf-progress-run-close', (event) => {
    event.preventDefault();
    docara.example.log('sf-progress-run-close', event.detail);
    start();
  });
  start();
};

initialize();
