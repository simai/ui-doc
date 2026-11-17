const ALL = [
  {value: 'forms', label: 'Формы', caption: 'Заявки и обратная связь'},
  {value: 'blog', label: 'Статьи', caption: 'Лента и рубрики'},
  {value: 'search', label: 'Поиск', caption: 'По всему сайту'},
  {value: 'seo', label: 'SEO', caption: 'Метатеги и карта сайта'},
  {value: 'crm', label: 'Битрикс24', caption: 'Заявки в CRM'},
  {value: '1c', label: '1С', caption: 'Товары и остатки'},
  {value: 'pay', label: 'Оплата', caption: 'ЮKassa, СБП'},
  {value: 'delivery', label: 'Доставка', caption: 'СДЭК, Почта'},
  {value: 'reviews', label: 'Отзывы', caption: 'С модерацией'}];
const FIRST = 6;
Promise.all(['sf-input-choice', 'sf-button'].map((t) => customElements.whenDefined(t))).then(() => {
  const choice = document.getElementById('modules');
  const more = document.getElementById('modules-all');
  let picked = ['forms', 'search', 'pay'];
  const draw = (all) => {
    const shown = all ? ALL : ALL.filter((item, i) => i < FIRST || picked.includes(item.value));
    choice.setAttribute('items', JSON.stringify(shown));
    choice.setAttribute('value', picked.join(','));
    more.hidden = all || shown.length === ALL.length;
    more.setAttribute('text', `Показать все ${ALL.length}`);
  };
  choice.addEventListener('sf-input-choice-change', (event) => { picked = [].concat(event.detail.value ?? []); });
  more.addEventListener('click', () => {
    draw(true);
    requestAnimationFrame(() => choice.querySelectorAll('input')[FIRST]?.focus());
  });
  draw(false);
});
