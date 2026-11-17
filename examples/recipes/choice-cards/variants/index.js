// Pictures of the documentation set (D22), kept beside the example.
customElements.whenDefined('sf-input-choice').then(() => {
  document.getElementById('template').setAttribute('items', JSON.stringify([
    {value: 'shop', label: 'Магазин', caption: 'Каталог, корзина, оплата', image: 'assets/document-07-16x9.svg'},
    {value: 'corp', label: 'Сайт компании', caption: 'Услуги, проекты, контакты', image: 'assets/document-08-16x9.svg'},
    {value: 'docs', label: 'Документация', caption: 'Статьи с поиском и оглавлением', image: 'assets/document-06-16x9.svg'}]));
});
