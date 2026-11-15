(async () => {
  await Promise.all(['sf-list', 'sf-progress-bar', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const TASKS = [
    {id: 'theme', text: 'Выбрать оформление', time: '1 минута'},
    {id: 'logo', text: 'Добавить логотип', time: '2 минуты'},
    {id: 'page', text: 'Создать первую страницу', time: '5 минут'},
    {id: 'domain', text: 'Подключить домен', time: '5 минут'},
    {id: 'team', text: 'Пригласить коллег', time: '1 минута'},
  ];
  const card = document.querySelector('#start-card');
  const list = document.querySelector('#start-list');
  const bar = document.querySelector('#start-bar');
  const count = document.querySelector('#start-count');
  const lead = document.querySelector('#start-lead');
  const hiddenNote = document.querySelector('#start-hidden');
  const live = document.querySelector('#start-live');
  let done = new Set();

  // Сделанное — значок и слово в строке; нового состояния у строки нет.
  const row = (task) => (done.has(task.id)
    ? {id: task.id, text: task.text, supporting: 'Готово', icon: 'check_circle'}
    : {id: task.id, text: task.text, supporting: task.time, icon: 'radio_button_unchecked'});
  const draw = () => {
    const n = done.size;
    const all = n === TASKS.length;
    list.setItems({items: TASKS.map(row), options: {hasMore: false}});
    bar.setAttribute('value', String(Math.round((n / TASKS.length) * 100)));
    bar.setAttribute('value-text', `${n} из ${TASKS.length} задач`);
    if (all) bar.setAttribute('status', 'success'); else bar.removeAttribute('status');
    count.textContent = `${n} из ${TASKS.length}`;
    lead.textContent = all ? 'Всё готово — сайт работает. При следующем входе список не покажется.' : 'Сайт заработает, когда сделаете эти пять дел. Порядок любой.';
    card.hidden = false;
    hiddenNote.hidden = true;
  };
  const show = (state) => {
    done = new Set(state === 'none' ? [] : state === 'all' ? TASKS.map((task) => task.id) : ['theme', 'logo', 'page']);
    draw();
  };

  // В продукте строка открывает задачу, а отметку ставит сервер, когда дело сделано; здесь нажатие отмечает задачу сразу.
  list.addEventListener('sf-list-open', (event) => {
    const task = TASKS.find((item) => item.id === event.detail?.id);
    if (!task || done.has(task.id)) return;
    done.add(task.id);
    draw();
    live.textContent = done.size === TASKS.length ? 'Всё готово — сайт работает' : `Готово: ${task.text}. ${done.size} из ${TASKS.length}`;
  });
  document.querySelector('#start-hide').addEventListener('click', () => {
    card.hidden = true;
    hiddenNote.hidden = false;
    hiddenNote.focus();
    live.textContent = 'Список скрыт';
  });
  document.querySelector('#start-state').addEventListener('sf-button-group-change', (event) => show(event.detail?.value ?? 'some'));
  show('some');
})();
