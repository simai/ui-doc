const library = document.getElementById('mail-library-nothing-found');
library.groups = [{id: 'basics', title: 'Основа'}, {id: 'commerce', title: 'Товары'}];
library.items = [
  {type: 'heading', title: 'Заголовок', purpose: 'Главная мысль письма', icon: 'title', group: 'basics'},
  {type: 'price', title: 'Цена', purpose: 'Цена и старая цена', icon: 'sell', group: 'commerce'},
];
