// Every tab has href: the row is a strip of links, the current one says aria-current="page".
(async () => {
  await customElements.whenDefined('sf-tabs');
  document.querySelector('#tabs-links')?.setItems([
    {key: 'main', label: 'Заказ', href: '#order-main'},
    {key: 'goods', label: 'Товары', count: 3, href: '#order-goods'},
    {key: 'delivery', label: 'Доставка', href: '#order-delivery'},
    {key: 'history', label: 'История', href: '#order-history'},
  ]);
})();
