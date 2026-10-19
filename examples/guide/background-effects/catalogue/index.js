// Каталог и отпечаток его индекса: индекс тоже проверяется.
window.SF_BOOT_CONFIG = Object.assign({}, window.SF_BOOT_CONFIG, {
  effects: {
    catalogue: 'https://cdn.jsdelivr.net/gh/simai/ui-effects@d955c66ae024552f5e2f98c418e2923959484877/',
    indexSha256: '9a594fa4d9bb452419aaafbbd4af72443034ce5b1c71d6805be95b1fb868e01e',
  },
});

const log = document.querySelector('#effect-log');
const write = (line) => { log.textContent += `${line}\n`; };
// SF.Effects появляется, когда выполнен core.js.
const effects = () => new Promise((resolve) => {
  const check = () => (window.SF?.Effects ? resolve(window.SF.Effects) : setTimeout(check, 50));
  check();
});

async function start() {
  const Effects = await effects();
  const effect = await Effects.loadEffect('contour-map');
  write(`loadEffect: ${effect.id}, схемы ${Effects.effectSchemes(effect.manifest).join(', ')}`);
  write(`allowedModes: ${Effects.allowedModes(effect.manifest).join(', ')}`);

  const area = document.querySelector('#effect-area');
  const handle = await Effects.placeEffect(area, {effect: 'contour-map', settings: {}, themeMode: 'auto'});
  write(handle ? `placeEffect: ${handle.effect}, схема ${handle.scheme}` : `placeEffect: ${area.getAttribute('data-sf-effect-reason')}`);

  // Адрес вне каталога — чужой эффект: он не запускается.
  try {
    await Effects.loadEffect('https://example.com/effects/other/effect.json');
  } catch (error) {
    write(`чужой адрес: ${error.reason}`);
  }
}
start().catch((error) => write(`ошибка: ${error.reason ?? error.message}`));
