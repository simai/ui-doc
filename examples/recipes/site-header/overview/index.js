const SHOP = [
  {id: 'catalog', label: 'Каталог', href: '#catalog', children: [
    {id: 'pumps', label: 'Насосы', href: '#pumps'},
    {id: 'filters', label: 'Фильтры для воды', href: '#filters'},
    {id: 'heaters', label: 'Водонагреватели', href: '#heaters'}]},
  {id: 'delivery', label: 'Доставка', href: '#delivery'},
  {id: 'service', label: 'Сервис', href: '#service'},
  {id: 'about', label: 'О компании', href: '#about'},
  {id: 'contacts', label: 'Контакты', href: '#contacts'}];
const FOUND = [
  {id: 'g1', group: 'goods', title: 'Насос погружной Аквабур-40', path: 'Каталог › Насосы', href: '#g1', icon: 'water_pump'},
  {id: 'g2', group: 'goods', title: 'Насос поверхностный Аквабур-25', path: 'Каталог › Насосы', href: '#g2', icon: 'water_pump'},
  {id: 'a1', group: 'pages', title: 'Как выбрать насос для скважины', path: 'Статьи', href: '#a1', icon: 'article'}];
Promise.all(['sf-menu', 'sf-header-site', 'sf-search'].map((t) => customElements.whenDefined(t))).then(() => {
  const menu = document.getElementById('shop-menu');
  const search = document.getElementById('shop-search');
  menu.setAttribute('items', JSON.stringify(SHOP));
  menu.addEventListener('sf-menu-navigate', (event) => { event.preventDefault(); menu.setAttribute('current', event.detail.id); });
  search.provider = (query) => new Promise((resolve, reject) => setTimeout(() => {
    if (document.getElementById('search-fail').checked) { reject(new Error('Поиск недоступен')); return; }
    const q = String(query || '').toLowerCase();
    resolve({groups: [{id: 'goods', label: 'Товары'}, {id: 'pages', label: 'Статьи'}],
      items: q ? FOUND.filter((i) => (i.title + i.path).toLowerCase().includes(q)) : [],
      popular: ['насос для скважины', 'фильтр под мойку']});
  }, 250));
  search.addEventListener('sf-search-navigate', (event) => event.preventDefault());
  document.getElementById('search-open').addEventListener('click', () => search.open());
});
