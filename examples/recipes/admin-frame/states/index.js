const SHORT = [{id: 'pages', label: 'Страницы', href: '#pages', icon: 'description'}, {id: 'orders', label: 'Заказы', href: '#orders', icon: 'shopping_bag', count: 12}, {id: 'users', label: 'Пользователи', href: '#users', icon: 'group'}];
const ADMIN = [{group: true, label: 'Сайт', items: [{id: 'pages', label: 'Страницы', href: '#pages', icon: 'description'}, {id: 'catalog', label: 'Каталог', icon: 'category', children: [{id: 'goods', label: 'Товары', href: '#goods'}, {id: 'filters', label: 'Фильтры для воды', href: '#filters'}]}, {id: 'orders', label: 'Заказы', href: '#orders', icon: 'shopping_bag', count: 12}]}, {group: true, label: 'Управление', items: [{id: 'users', label: 'Пользователи', href: '#users', icon: 'group'}, {id: 'backups', label: 'Резервные копии', href: '#backups', icon: 'backup'}]}];
customElements.whenDefined('sf-menu').then(() => {
  document.querySelectorAll('sf-menu[data-menu="short"]').forEach((m) => m.setAttribute('items', JSON.stringify(SHORT)));
  document.querySelectorAll('sf-menu[data-menu="admin"]').forEach((m) => m.setAttribute('items', JSON.stringify(ADMIN)));
});
