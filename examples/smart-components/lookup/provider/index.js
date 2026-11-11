// The site answers the search: provider is an async function. Here a fixed
// list stands in for the server, with a pause like a network request.
const PEOPLE = [
  ['Анна Петрова', 'Дизайн'], ['Андрей Ковалёв', 'Разработка'], ['Анастасия Белова', 'Маркетинг'],
  ['Антон Зайцев', 'Поддержка'], ['Ангелина Морозова', 'Продажи'], ['Анатолий Фёдоров', 'Финансы'],
  ['Борис Иванов', 'Разработка'], ['Вера Смирнова', 'Поддержка'], ['Глеб Орлов', 'Продажи'],
  ['Диана Кузнецова', 'Дизайн'], ['Елена Новикова', 'Маркетинг'], ['Жанна Лебедева', 'Финансы'],
].map(([label, caption], index) => ({
  value: `u${index + 1}`,
  label,
  caption,
  avatar: {initials: label.split(' ').map((part) => part[0]).join('')},
}));
const ME = 'u1';

const wait = (ms, signal) => new Promise((resolve, reject) => {
  const timer = setTimeout(resolve, ms);
  signal?.addEventListener('abort', () => {
    clearTimeout(timer);
    reject(signal.reason);
  }, {once: true});
});

const provider = async (query, {cursor, limit, signal}) => {
  await wait(600, signal);
  const text = query.trim().toLowerCase();
  if (text === 'сбой') throw new Error('Сервер не ответил');
  if (text === 'нет сети') return {status: 'unavailable'};
  const found = PEOPLE.filter((person) => `${person.label} ${person.caption}`.toLowerCase().includes(text));
  const start = Number(cursor ?? 0);
  const items = found.slice(start, start + limit);
  return {items, nextCursor: start + limit < found.length ? String(start + limit) : undefined};
};

const initialize = async () => {
  await customElements.whenDefined('sf-input-lookup');
  const lookup = document.querySelector('sf-input-lookup[name="invitees"]');
  if (!lookup || lookup.dataset.exampleReady === 'true') return;
  lookup.dataset.exampleReady = 'true';
  // The person who invites is not offered to themselves.
  lookup.exclude = [ME];
  lookup.provider = async (query, options) => {
    docara.example.log('provider', {query, cursor: options.cursor ?? null, limit: options.limit});
    return provider(query, options);
  };
  lookup.addEventListener('change', (event) => docara.example.log('change', {action: event.detail.action, value: event.detail.value}));
};

initialize();
