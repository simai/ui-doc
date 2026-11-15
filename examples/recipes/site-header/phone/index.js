const SITE = [{id: 'products', label: 'Продукты', href: '#p'}, {id: 'docs', label: 'Документация', href: '#d'}, {id: 'effects', label: 'Эффекты', href: '#e'}, {id: 'blog', label: 'Блог', href: '#b'}];
const SHOP = [{id: 'catalog', label: 'Каталог', href: '#catalog'}, {id: 'delivery', label: 'Доставка', href: '#delivery'}, {id: 'service', label: 'Сервис', href: '#service'}, {id: 'contacts', label: 'Контакты', href: '#contacts'}];
customElements.whenDefined('sf-menu').then(() => {
  document.querySelectorAll('sf-menu[data-menu="site"]').forEach((m) => m.setAttribute('items', JSON.stringify(SITE)));
  document.querySelectorAll('sf-menu[data-menu="shop"]').forEach((m) => m.setAttribute('items', JSON.stringify(SHOP)));
});
