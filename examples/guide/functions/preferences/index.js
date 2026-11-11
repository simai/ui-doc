const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.Preferences with a host that keeps values in memory and reports what it receives.
const KEY = 'sf-list/example-orders';
const kept = {[KEY]: {density: 'spacious'}};
const show = () => {
  document.getElementById('preferences-value').textContent = JSON.stringify(window.SF.Preferences.read(KEY));
};
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  SF.Preferences.useHost({
    save: (key, value) => { kept[key] = value; log('host.save', {key, value}); },
    remove: (key) => { delete kept[key]; log('host.remove', {key}); },
  });
  SF.Preferences.preload(kept);
  SF.Preferences.subscribe(KEY, (value) => { log('subscribe', {value}); show(); });
  show();
  const write = (density) => { log('write', {key: KEY, ok: SF.Preferences.write(KEY, {density})}); show(); };
  document.getElementById('preferences-compact').addEventListener('click', () => write('compact'));
  document.getElementById('preferences-spacious').addEventListener('click', () => write('spacious'));
  document.getElementById('preferences-reset').addEventListener('click', () => SF.Preferences.remove(KEY));
};

start();
