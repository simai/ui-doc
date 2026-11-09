// chunk() appends to the output; the pane follows the newest line only while
// the reader is at its end. Download is a request a page may cancel to serve
// its own file; the toggle tells when the pane opens or closes.
const initialize = async () => {
  await customElements.whenDefined('sf-progress-run');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const run = document.querySelector('#run-output');
  run.addEventListener('sf-progress-run-toggle', (event) => docara.example.log('sf-progress-run-toggle', event.detail));
  run.addEventListener('sf-progress-run-download', (event) => {
    event.preventDefault();
    docara.example.log('sf-progress-run-download', event.detail);
  });
  let count = 0;
  const timer = setInterval(() => {
    count += 1;
    run.chunk({text: `packed ${count * 40} files\n`});
    if (count === 30) clearInterval(timer);
  }, 600);
};

initialize();
