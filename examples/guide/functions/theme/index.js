const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

// The theme here changes only inside this example frame; the frame has no
// cookie, so the choice lasts until the page is reloaded.
const show = () => {
  document.getElementById('theme-now').textContent = SF.Loader.theme;
  document.getElementById('theme-preference').textContent = SF.Loader.themePreference;
};

const start = async () => {
  await sfReady();
  window.addEventListener('sf-theme-change', (event) => {
    const {theme, preference} = event.detail;
    log('sf-theme-change', {theme, preference});
    show();
  });
  show();
  const press = (id, run) => document.getElementById(id).addEventListener('click', () => log(id, {result: run()}));
  press('theme-dark', () => SF.Loader.setTheme('dark'));
  press('theme-light', () => SF.Loader.setTheme('light'));
  press('theme-system', () => SF.Loader.setTheme('system'));
  press('theme-change', () => SF.Loader.changeTheme());
};

start();
