const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// data-sf-code-copy makes code in running text a copy control; SF.codeCopy answers which.
const report = () => {
  const codes = [...document.querySelectorAll('#code-copy-article code')];
  log('SF.codeCopy.isCopyable', Object.fromEntries(codes.map((code) => [code.textContent, window.SF.codeCopy.isCopyable(code)])));
};
const start = async () => {
  await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  report();
  let added = 0;
  document.getElementById('code-copy-add').addEventListener('click', () => {
    added += 1;
    const paragraph = document.createElement('p');
    paragraph.className = 'm-0';
    paragraph.innerHTML = `Новый абзац ${added}: <code>SF.notify</code>`;
    document.getElementById('code-copy-add').parentElement.before(paragraph);
    setTimeout(report, 0);
  });
};

start();
