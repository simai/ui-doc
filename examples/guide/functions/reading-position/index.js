const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.readingPosition keeps the reader's place while entries are added at both ends.
let first = 0;
let last = 0;
const entry = (number) => {
  const item = document.createElement('li');
  item.className = 'p-2 radius-2 bg-surface-card';
  item.textContent = `Сообщение ${number}`;
  return item;
};
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const scroller = document.getElementById('reading-scroller');
  const column = document.getElementById('reading-column');
  for (last = 1; last <= 12; last += 1) column.append(entry(last));
  last -= 1;
  first = 1;
  const position = SF.readingPosition.create(scroller, {onStart: () => log('onStart', {первое: first})});
  position.toEnd({instant: true, settle: true});
  scroller.addEventListener('scroll', () => position.check());
  document.getElementById('reading-end').addEventListener('click', () => {
    const follow = position.atEnd();
    last += 1;
    column.append(entry(last));
    if (follow) position.toEnd();
    log('atEnd', {follow, добавлено: last});
  });
  document.getElementById('reading-start').addEventListener('click', () => {
    position.keep(() => {
      for (let step = 0; step < 3; step += 1) {
        first -= 1;
        column.prepend(entry(first));
      }
    });
    log('keep', {первое: first, atStart: position.atStart()});
  });
};

start();
