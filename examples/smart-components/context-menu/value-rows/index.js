// A mixed menu: two commands and two settings rows that change in place.
document.querySelectorAll('[data-context-menu-demo="value-rows"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const menu = demo.querySelector('sf-menu-context');
  menu.entries = [
    {id: 'print', text: 'Печать', icon: 'print', shortcut: 'Ctrl+P'},
    {id: 'export', text: 'Скачать PDF', icon: 'download'},
    {type: 'separator'},
    {type: 'switch', id: 'wrap', text: 'Переносить строки', icon: 'wrap_text', value: true},
    {type: 'range', id: 'zoom', text: 'Масштаб', icon: 'zoom_in', value: 100, min: 50, max: 200, step: 10, unit: '%'},
  ];
  anchor.addEventListener('click', () => menu.toggleFor({anchor}));
});
