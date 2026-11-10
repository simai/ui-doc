const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
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
  await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.getElementById('package-pro').addEventListener('click', () => ask('pro'));
  document.getElementById('package-chart').addEventListener('click', () => ask('chart'));
};

start();
