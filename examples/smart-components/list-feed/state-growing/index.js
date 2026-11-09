// An answer that arrives in parts: growing stays true while it is written,
// each part is a new upsert with a longer text; growing false ends it.
const parts = ['Чтобы вернуть товар,', ' откройте заказ', ' и нажмите «Вернуть».'];
const answer = (text, growing) => ({id: 'a1', author: 'assistant', 'author-name': 'Ассистент', text, growing});

const initialize = async () => {
  await customElements.whenDefined('sf-list-feed');
  const feed = document.querySelector('#list-feed-growing');
  const finish = document.querySelector('#list-feed-growing-finish');
  const output = document.querySelector('#list-feed-growing-output');
  if (!feed || !finish || !output || feed.dataset.exampleReady === 'true') return;
  feed.dataset.exampleReady = 'true';
  feed.addEventListener('sf-list-feed-completed', () => { output.value = 'Ответ закончен'; });
  feed.setItems([{id: 'q1', author: 'me', own: true, text: 'Как вернуть товар?'}], {hasMore: false});
  let text = '';
  parts.forEach((part, index) => {
    setTimeout(() => {
      text += part;
      feed.upsert(answer(text, true));
    }, 400 * (index + 1));
  });
  finish.addEventListener('click', () => {
    text += ' Деньги придут за 3–5 дней.';
    feed.upsert(answer(text, false));
  }, {once: true});
};

initialize();
