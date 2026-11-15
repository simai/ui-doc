const MANY = ['Каталог', 'Доставка', 'Сервис', 'О компании', 'Контакты', 'Статьи', 'Акции', 'Оптовикам', 'Вакансии', 'Гарантия']
  .map((label, i) => ({id: i ? 'm' + i : 'catalog', label, href: '#m' + i}));
customElements.whenDefined('sf-menu').then(() => document.getElementById('many-menu').setAttribute('items', JSON.stringify(MANY)));
