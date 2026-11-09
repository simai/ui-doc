// A host that lives on this page: it hands the feed the comments, answers
// the request for earlier history and adds a comment of its own.
const comments = [
  ['c3', 'anna', 'Анна', 'Макет каталога готов.'],
  ['c4', 'anna', 'Анна', 'Посмотрите, пожалуйста, раздел с фильтрами.'],
  ['c5', 'me', 'Вы', 'Посмотрел. Фильтр по цене лучше поставить первым.'],
  ['c6', 'anna', 'Анна', 'Поменяю и пришлю новую версию.'],
  ['c7', 'ivan', 'Иван', 'Тексты для фильтров я подготовлю к вечеру.'],
  ['c8', 'me', 'Вы', 'Спасибо! Тогда завтра запускаем.'],
].map(([id, author, name, text]) => ({id, author, 'author-name': name, text, own: author === 'me'}));
const earlier = [
  {id: 'c1', author: 'me', 'author-name': 'Вы', own: true, text: 'Анна, как продвигается каталог?'},
  {id: 'c2', author: 'anna', 'author-name': 'Анна', text: 'Заканчиваю, сегодня покажу.'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list-feed');
  const feed = document.querySelector('#list-feed-overview');
  const add = document.querySelector('#list-feed-overview-add');
  if (!feed || !add || feed.dataset.exampleReady === 'true') return;
  feed.dataset.exampleReady = 'true';
  feed.setItems(comments, {hasMore: true});
  feed.addEventListener('sf-list-feed-load-more', () => {
    setTimeout(() => feed.prependItems(earlier, {hasMore: false}), 600);
  });
  let next = 9;
  add.addEventListener('click', () => {
    feed.upsert({id: `c${next}`, author: 'me', 'author-name': 'Вы', own: true, text: `Комментарий ${next}`});
    next += 1;
  });
};

initialize();
