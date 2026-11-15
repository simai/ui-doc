// Beyond the sections, the page answers the query with its own records.
const orders = [
  {text: 'Заказ № 1042', subtext: 'Оплачен, 3 товара', icon: 'receipt_long', href: '#order-1042'},
  {text: 'Заказ № 1017', subtext: 'Возврат', icon: 'receipt_long', href: '#order-1017'},
  {text: 'Заказ № 1009', subtext: 'Доставлен', icon: 'receipt_long', href: '#order-1009'},
];

const initializeAdminMenuSearch = async () => {
  await customElements.whenDefined('sf-admin-menu');
  const menu = document.querySelector('#admin-menu-search');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.addEventListener('sf-admin-menu-query', (event) => {
    const {requestId, query} = event.detail;
    const found = orders.filter((order) => `${order.text} ${order.subtext}`.toLowerCase().includes(query.toLowerCase()));
    setTimeout(() => menu.setSearchResults(requestId, found.length ? [{key: 'orders', label: 'Заказы', items: found}] : []), 300);
  });
};

initializeAdminMenuSearch();
