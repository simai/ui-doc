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
