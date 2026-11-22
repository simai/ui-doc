// The panel writes the person's choice on <html>; core styles read it on
// every page, panel or not. The page only listens to show what changed.
// In this example frame the browser keeps nothing: the choice lasts until
// the page is reloaded.

const names = {scheme: 'цветовая схема', textScale: 'размер текста', textSpacing: 'интервалы', images: 'картинки', motion: 'движение', font: 'шрифт', links: 'ссылки', reset: 'обычная версия'};
const state = document.querySelector('#display-settings-state');

document.addEventListener('sf-display-settings-change', (event) => {
  const {setting, settings} = event.detail ?? {};
  state.textContent = setting === 'reset'
    ? 'Возвращена обычная версия'
    : `Изменено: ${names[setting] ?? setting}; текст ${settings?.textScale ?? 100} %`;
});

// Only for this example: the documentation frame copies the page's root font
// size onto <html> inline, and an inline size beats the core rule that scales
// the text. While a text scale is chosen the frame lets the core rule work;
// on a site this part is not needed.
let docaraRootSize = document.documentElement.style.fontSize;
const letTextScaleWork = () => {
  const root = document.documentElement;
  const scaled = root.hasAttribute('data-sf-text-scale');
  if (!scaled && root.style.fontSize) docaraRootSize = root.style.fontSize;
  if (scaled && root.style.fontSize) root.style.removeProperty('font-size');
  else if (!scaled && docaraRootSize && root.style.fontSize !== docaraRootSize) root.style.fontSize = docaraRootSize;
};
new MutationObserver(letTextScaleWork).observe(document.documentElement, {attributes: true, attributeFilter: ['data-sf-text-scale', 'style']});
