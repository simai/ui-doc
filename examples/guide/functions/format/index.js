const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// The same values through SF.format in a Russian and an English block.
const start = async () => {
  await sfReady();
  const {format} = window.SF;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const now = new Date();
  const yesterday = new Date(now.getTime() - 26 * 60 * 60 * 1000);
  const fiveMinutes = new Date(now.getTime() - 5 * 60 * 1000);
  for (const block of document.querySelectorAll('[data-format-block]')) {
    const node = block;
    const values = {
      'date': format.date(now, {node}),
      'date long': format.date(now, {node, date: 'long', time: 'short'}),
      'relativeDay': format.relativeDay(yesterday, {node, capital: true}),
      'relativeTime': format.relativeTime(fiveMinutes, {node}),
      'currency-RUB': format.number(1234.5, 'currency-RUB', {node}),
      'percent': format.number(0.123, 'percent', {node}),
      'fileSize': format.fileSize(1468006, {node}),
    };
    for (const [name, text] of Object.entries(values)) {
      const value = document.createElement('dd');
      value.className = 'm-0';
      value.textContent = text;
      value.title = name;
      block.append(value);
    }
    log(block.lang, values);
  }
};

start();
