// A host that lives on this page: it hands the log the conversation and
// answers the request for earlier history. The log loads nothing by itself.
const conversation = [
  ['m1', 'anna', 'Анна', 'Добрый день! Макет каталога готов.'],
  ['m2', 'anna', 'Анна', 'Посмотрите, пожалуйста, раздел с фильтрами.'],
  ['m3', 'me', 'Вы', 'Посмотрел. Фильтр по цене лучше поставить первым.'],
  ['m4', 'anna', 'Анна', 'Поменяю и пришлю новую версию.'],
  ['m5', 'me', 'Вы', 'Спасибо! Тогда завтра запускаем.'],
].map(([id, author, author_name, text]) => ({id, author, author_name, text, own: author === 'me'}));
const earlier = [
  {id: 'm0', author: 'me', author_name: 'Вы', own: true, text: 'Анна, как продвигается каталог?'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-message-log');
  const log = document.querySelector('#message-log-overview');
  if (!log || log.dataset.exampleReady === 'true') return;
  log.dataset.exampleReady = 'true';
  log.setMessages(conversation, {hasMore: true});
  log.addEventListener('sf-message-log-load-earlier', () => {
    setTimeout(() => log.prependMessages(earlier, {hasMore: false}), 600);
  });
};

initialize();
