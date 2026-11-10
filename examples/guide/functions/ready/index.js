const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.ready as a promise on load, and as a function on a press.
const start = async () => {
  const SF = await window.SF.ready;
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
