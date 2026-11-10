const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.loadSmartBase on a page with no Smart element, and SF.smartBaseReady after it.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  log('до вызова', {'SF.smart': SF.smart ? 'есть' : 'нет'});
  document.getElementById('smart-base-load').addEventListener('click', async () => {
    const smart = await SF.loadSmartBase();
    const ready = await SF.smartBaseReady;
    log('SF.loadSmartBase', {members: Object.keys(smart ?? {}), 'тот же объект': smart === ready && smart === SF.smart});
  });
};

start();
