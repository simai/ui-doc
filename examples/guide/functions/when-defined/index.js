const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.whenDefined for an element in the markup, and for a tag nobody loads.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const tags = await SF.whenDefined('tile-metric');
  const tile = document.getElementById('when-defined-tile');
  log('SF.whenDefined', {tags, value: tile.getAttribute('value'), определён: Boolean(customElements.get('sf-tile-metric'))});
  document.getElementById('when-defined-absent').addEventListener('click', () => {
    let answered = false;
    SF.whenDefined('stepper').then(() => { answered = true; log('SF.whenDefined', 'sf-stepper определён'); });
    setTimeout(() => { if (!answered) log('SF.whenDefined', 'sf-stepper: ответа нет через 3 секунды — тег никто не загружает'); }, 3000);
  });
};

start();
