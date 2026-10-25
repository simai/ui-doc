// The host decides what a message looks like: renderMessage returns a node.
// Own messages stand at the end of the line, the assistant's on a tonal fill.
const messages = [
  {id: 'a1', author: 'me', own: true, text: 'Сколько заказов пришло вчера?'},
  {id: 'a2', author: 'assistant', author_name: 'Ассистент', text: 'Вчера пришло 42 заказа, на 8 больше, чем позавчера.'},
  {id: 'a3', author: 'me', own: true, text: 'А сколько из них оплачено?'},
  {id: 'a4', author: 'assistant', author_name: 'Ассистент', text: 'Оплачено 37, ещё 5 ждут оплаты.'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-message-log');
  const log = document.querySelector('#message-log-render');
  if (!log || log.dataset.exampleReady === 'true') return;
  log.dataset.exampleReady = 'true';
  log.renderMessage = (message, {own}) => {
    const node = document.createElement('article');
    node.setAttribute('aria-label', own ? 'Вы' : message.author_name);
    node.className = own
      ? 'p-1/2 radius-2 bg-primary-container color-on-primary-container'
      : 'p-1/2 radius-2 bg-surface-container';
    node.style.maxWidth = '80%';
    node.style.marginInlineStart = own ? 'auto' : '0';
    node.textContent = message.text;
    return node;
  };
  log.setMessages(messages, {hasMore: false});
};

initialize();
