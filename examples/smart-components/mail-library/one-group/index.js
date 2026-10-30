const library = document.getElementById('mail-library-one-group');
library.groups = [{id: 'basics', title: 'Основа'}];
library.items = [
  {type: 'heading', title: 'Заголовок', purpose: 'Главная мысль письма', icon: 'title', group: 'basics'},
  {type: 'text', title: 'Текст', purpose: 'Абзац или два', icon: 'notes', group: 'basics'},
];
