const MENU = [
  {group: true, label: 'Сайт', items: [
    {id: 'pages', label: 'Страницы', href: '#pages', icon: 'description'},
    {id: 'catalog', label: 'Каталог', icon: 'category', children: [
      {id: 'goods', label: 'Товары', href: '#goods'},
      {id: 'filters', label: 'Фильтры для воды', href: '#filters'},
      {id: 'sections', label: 'Разделы', href: '#sections'}]},
    {id: 'orders', label: 'Заказы', href: '#orders', icon: 'shopping_bag', count: 12},
    {id: 'forms', label: 'Формы', href: '#forms', icon: 'list_alt'}]},
  {group: true, label: 'Управление', items: [
    {id: 'users', label: 'Пользователи', href: '#users', icon: 'group'},
    {id: 'look', label: 'Оформление', href: '#look', icon: 'palette'},
    {id: 'domains', label: 'Домены', href: '#domains', icon: 'language'},
    {id: 'backups', label: 'Резервные копии', href: '#backups', icon: 'backup'}]}];
const PAGES = [
  {id: 'p1', text: 'Главная', supporting: '/ · изменена сегодня', icon: 'home'},
  {id: 'p2', text: 'Насосы для дачи', supporting: '/catalog/nasosy · черновик', icon: 'description'},
  {id: 'p3', text: 'Доставка и оплата', supporting: '/delivery · изменена 12 ноября', icon: 'description'},
  {id: 'p4', text: 'Контакты', supporting: '/contacts · изменена 3 ноября', icon: 'description'}];
Promise.all(['sf-menu', 'sf-list', 'sf-drawer', 'sf-header-page'].map((t) => customElements.whenDefined(t))).then(() => {
  const menus = document.querySelectorAll('sf-menu[data-menu="admin"]');
  const drawer = document.getElementById('frame-drawer');
  menus.forEach((menu) => menu.setAttribute('items', JSON.stringify(MENU)));
  document.getElementById('frame-pages').items = PAGES;
  document.getElementById('frame-toggle').addEventListener('click', () => drawer.toggle());
  document.addEventListener('sf-menu-navigate', (event) => {
    event.preventDefault();
    menus.forEach((menu) => menu.setAttribute('current', event.detail.id));
    if (event.detail.label) document.getElementById('frame-head').setAttribute('heading', event.detail.label);
    if (drawer.hasAttribute('open')) drawer.close();
  });
});
