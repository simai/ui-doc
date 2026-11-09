// The host decides what an entry looks like: renderItem returns a node.
// Own entries stand at the end of the line, the assistant's on a tonal fill.
const entries = [
  {id: 'a1', author: 'me', own: true, text: 'Сколько заказов пришло вчера?'},
  {id: 'a2', author: 'assistant', 'author-name': 'Ассистент', text: 'Вчера пришло 42 заказа, на 8 больше, чем позавчера.'},
  {id: 'a3', author: 'me', own: true, text: 'А сколько из них оплачено?'},
  {id: 'a4', author: 'assistant', 'author-name': 'Ассистент', text: 'Оплачено 37, ещё 5 ждут оплаты.'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list-feed');
  const feed = document.querySelector('#list-feed-render');
  if (!feed || feed.dataset.exampleReady === 'true') return;
  feed.dataset.exampleReady = 'true';
  feed.renderItem = (entry, {own}) => {
    const node = document.createElement('article');
    node.setAttribute('aria-label', own ? 'Вы' : entry['author-name']);
    node.className = own
      ? 'p-1/2 radius-2 bg-primary-container color-on-primary-container'
      : 'p-1/2 radius-2 bg-surface-container';
    node.style.maxWidth = '80%';
    node.style.marginInlineStart = own ? 'auto' : '0';
    node.textContent = entry.text;
    return node;
  };
  feed.setItems(entries, {hasMore: false});
};

initialize();
