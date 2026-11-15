(async () => {
  await customElements.whenDefined('sf-list');
  document.querySelector('#phone-sites')?.setItems({items: [
    {id: 's1', text: 'Магазин «Северный ветер»', supporting: 'nord-wind.ru · Магазин', icon: 'storefront'},
    {id: 's3', text: 'Блог о путешествиях', supporting: 'travel-notes.ru · Блог', icon: 'article', badge: {text: 'Сертификат', tone: 'warning'}},
    {id: 's9', text: 'Кофейня на Садовой', supporting: 'sadovaya.coffee · Визитка', icon: 'local_cafe'},
  ], options: {hasMore: false}});
})();
