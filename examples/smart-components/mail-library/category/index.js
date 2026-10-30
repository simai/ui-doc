const library = document.getElementById('mail-library-category');
library.groups = [{id: 'basics', title: 'Основа'}, {id: 'commerce', title: 'Товары'}];
library.items = [
  {type: 'heading', title: 'Заголовок', purpose: 'Главная мысль письма', icon: 'title', group: 'basics'},
  {type: 'price', title: 'Цена', purpose: 'Цена и старая цена', icon: 'sell', group: 'commerce'},
  {type: 'product', title: 'Товар', purpose: 'Фото, название и кнопка', icon: 'shopping_bag', group: 'commerce'},
];
