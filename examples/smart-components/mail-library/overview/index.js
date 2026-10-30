// A host that lives on this page: the blocks are data in the person's words,
// and the element only says what the person chose.
const library = document.getElementById('mail-library-overview');
const status = document.getElementById('mail-library-overview-status');
const header = {family: 'header', title: 'Шапка', current: 'header-logo', items: [
  {type: 'header-logo', title: 'Логотип', purpose: 'Логотип по центру', icon: 'image'},
  {type: 'header-band', title: 'Полоса', purpose: 'Цветная полоса с логотипом', icon: 'view_carousel'},
]};
library.groups = [{id: 'basics', title: 'Основа'}, {id: 'commerce', title: 'Товары'}];
library.items = [
  {type: 'heading', title: 'Заголовок', purpose: 'Главная мысль письма', icon: 'title', group: 'basics'},
  {type: 'text', title: 'Текст', purpose: 'Абзац или два', icon: 'notes', group: 'basics'},
  {type: 'price', title: 'Цена', purpose: 'Цена и старая цена', icon: 'sell', group: 'commerce'},
];
library.places = [header];
library.addEventListener('sf-mail-library-add', (event) => {
  status.textContent = `Добавлен блок: ${event.detail.type}`;
});
library.addEventListener('sf-mail-library-replace', (event) => {
  library.places = [{...header, current: event.detail.type}];
  status.textContent = `Шапка: ${event.detail.type}`;
});
