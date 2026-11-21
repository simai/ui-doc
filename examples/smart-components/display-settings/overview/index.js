// The panel writes the choice on <html>; the core styles of the site show it
// on every page. The page only listens to say what changed. In this example
// frame the browser keeps nothing: the choice lasts until the page reloads.
const names = {scheme: 'цветовая схема', textScale: 'размер текста', textSpacing: 'интервалы', images: 'картинки', motion: 'движение', font: 'шрифт', links: 'ссылки'};
const said = document.querySelector('#display-settings-said');

document.addEventListener('sf-display-settings-change', (event) => {
  const {setting, settings} = event.detail;
  said.textContent = setting === 'reset'
    ? 'Возвращена обычная версия.'
    : `Изменено: ${names[setting] ?? setting}. Текст ${settings.textScale} %.`;
});
