// The host answers an empty query with the person's recent choices, and a
// typed one with a search over the staff, after a pause like a server's.
const PEOPLE = [
  {value: 'u1', label: 'Анна Петрова', caption: 'Дизайн', avatar: {initials: 'АП'}},
  {value: 'u2', label: 'Борис Иванов', caption: 'Разработка', avatar: {initials: 'БИ'}},
  {value: 'u3', label: 'Вера Смирнова', caption: 'Поддержка', avatar: {initials: 'ВС'}},
  {value: 'u4', label: 'Глеб Орлов', caption: 'Продажи', avatar: {initials: 'ГО'}},
  {value: 'u5', label: 'Дарья Кузнецова', caption: 'Бухгалтерия', avatar: {initials: 'ДК'}},
];
const RECENT = ['u3', 'u1'];

const initializeSuggestExample = async () => {
  await customElements.whenDefined('sf-input-lookup');
  const field = document.getElementById('lookup-suggest');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.provider = (query, {signal}) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const text = query.trim().toLowerCase();
      resolve({items: text
        ? PEOPLE.filter((person) => person.label.toLowerCase().includes(text))
        : RECENT.map((id) => PEOPLE.find((person) => person.value === id))});
    }, 300);
    signal?.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('aborted', 'AbortError')); });
  });
};

initializeSuggestExample();
