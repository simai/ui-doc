// Each button opens its panel with open(). A panel opened from the script
// keeps its close at the end of its head; a toggle with aria-controls at the
// edge of its row would put the close on that button's axis instead (see
// «Крестик на оси кнопки» below).
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['drawer']);
  for (const button of document.querySelectorAll('[data-side-panel]')) {
    const drawer = document.getElementById(button.dataset.sidePanel);
    button.addEventListener('click', () => {
      for (const other of document.querySelectorAll('sf-drawer[open]')) if (other !== drawer) other.close();
      drawer.toggle();
    });
  }
};

start();
