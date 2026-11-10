const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.package for a set the page declared and for one it did not.
const ask = async (name) => {
  try {
    const exports = await window.SF.package(name);
    log(`SF.package('${name}')`, {exports: Object.keys(exports ?? {})});
  } catch (error) {
    log(`SF.package('${name}')`, {error: error.message});
  }
};
const start = async () => {
  await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.getElementById('package-pro').addEventListener('click', () => ask('pro'));
  document.getElementById('package-chart').addEventListener('click', () => ask('chart'));
};

start();
