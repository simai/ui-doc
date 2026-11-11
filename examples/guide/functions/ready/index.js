const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.ready as a promise on load, and as a function on a press.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  log('await SF.ready', {Loader: typeof SF.Loader, create: typeof SF.create, whenDefined: typeof SF.whenDefined});
  document.getElementById('ready-again').addEventListener('click', () => {
    let calledAt = 'позже';
    SF.ready(() => { calledAt = 'сразу'; });
    log('SF.ready(fn)', {вызвана: calledAt});
  });
};

start();
