// Каталог и отпечаток его индекса: индекс тоже проверяется.
window.SF_BOOT_CONFIG = Object.assign({}, window.SF_BOOT_CONFIG, {
  effects: {
    catalogue: 'https://cdn.jsdelivr.net/gh/simai/ui-effects@e3a6c512f562e214bb33cab79cfac0c8ad1ead4e/',
    indexSha256: '41dc65f33c5dd5bc519b153bd289de91e4dcf9e1632b0403edfc2f0ad018e2e2',
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

  // Адрес вне каталога — чужой эффект: он работает только в изолированном
  // фрейме. С foreign: 'refuse' он отклоняется, и адрес даже не запрашивается.
  write(`foreignMode: ${Effects.foreignMode()}`);
  try {
    await Effects.loadEffect('https://example.com/effects/other/effect.json', {foreign: 'refuse'});
  } catch (error) {
    write(`чужой адрес при refuse: ${error.reason}`);
  }
}
start().catch((error) => write(`ошибка: ${error.reason ?? error.message}`));
