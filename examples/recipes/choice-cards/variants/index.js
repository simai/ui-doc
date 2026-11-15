// Flat placeholders until the documentation illustration set is in place.
const screen = (bg, fg) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="${bg}"/><rect x="20" y="20" width="280" height="24" rx="4" fill="${fg}"/><rect x="20" y="60" width="160" height="100" rx="6" fill="${fg}"/><rect x="196" y="60" width="104" height="44" rx="6" fill="${fg}"/><rect x="196" y="116" width="104" height="44" rx="6" fill="${fg}"/></svg>`);
customElements.whenDefined('sf-input-choice').then(() => {
  document.getElementById('template').setAttribute('items', JSON.stringify([
    {value: 'shop', label: 'Магазин', caption: 'Каталог, корзина, оплата', image: screen('#dbe4f3', '#b7c7e6')},
    {value: 'corp', label: 'Сайт компании', caption: 'Услуги, проекты, контакты', image: screen('#e6efe2', '#c5d8bd')},
    {value: 'docs', label: 'Документация', caption: 'Статьи с поиском и оглавлением', image: screen('#efe7dc', '#dccbb3')}]));
});
