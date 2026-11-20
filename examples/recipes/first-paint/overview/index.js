(async () => {
  const MENU = [
    {id: 'dash', label: 'Обзор', icon: 'dashboard', href: '#dash'},
    {id: 'news', label: 'Новости', icon: 'newspaper', href: '#news', current: true},
    {id: 'pages', label: 'Страницы', icon: 'description', href: '#pages'},
    {id: 'shop', label: 'Магазин', icon: 'storefront', href: '#shop'},
    {id: 'files', label: 'Файлы', icon: 'folder', href: '#files'},
    {id: 'users', label: 'Пользователи', icon: 'group', href: '#users'},
  ];
  const ROWS = [
    {id: '1', icon: 'newspaper', text: 'Осенняя распродажа: скидки до 30 %', supporting: 'Опубликовано · 14 ноября · Анна Котова'},
    {id: '2', icon: 'newspaper', text: 'Новые улуны из Фуцзяня', supporting: 'Черновик · 13 ноября · Сергей Иванов'},
    {id: '3', icon: 'newspaper', text: 'График работы в праздники', supporting: 'Опубликовано · 10 ноября · Анна Котова'},
    {id: '4', icon: 'newspaper', text: 'Как заваривать пуэр', supporting: 'Опубликовано · 2 ноября · Ирина Котова'},
  ];
  const TILES = [['24', 'опубликовано'], ['3', 'черновика'], ['1 240', 'просмотров за неделю']];
  await Promise.all(['sf-menu', 'sf-list', 'sf-button', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const menu = $('#admin-menu');
  const tiles = $('#tiles');
  const place = $('#list-place');
  const list = $('#news');
  const refresh = $('#refresh');
  let timer = 0;

  // Меню печатает сервер: оно в первом кадре и скелетом не рисуется.
  menu.items = MENU;
  menu.addEventListener('sf-menu-navigate', (event) => event.preventDefault());

  const skeletonTiles = () => {
    tiles.setAttribute('aria-busy', 'true');
    tiles.innerHTML = TILES.map(() => '<sf-skeleton kind="rounded" width="100%" height="var(--sf-e1)" aria-hidden="true"></sf-skeleton>').join('');
  };
  const realTiles = () => {
    tiles.removeAttribute('aria-busy');
    tiles.innerHTML = TILES.map(([value, label]) => `<div class="news-tile"><span class="text-2 weight-medium">${value}</span><span class="text-1/2 color-on-surface-variant">${label}</span></div>`).join('');
  };
  const firstFrame = () => {
    place.querySelector('sf-empty-state')?.remove();
    list.hidden = false;
    list.items = [];
    list.setAttribute('loading', '');
    skeletonTiles();
  };
  const empty = (kind, heading, text) => {
    list.hidden = true;
    const state = document.createElement('sf-empty-state');
    state.setAttribute('kind', kind);
    state.setAttribute('size', '1/2');
    state.setAttribute('heading', heading);
    state.setAttribute('text', text);
    place.append(state);
  };
  const load = (ms, then) => {
    clearTimeout(timer);
    firstFrame();
    refresh.setAttribute('loading', '');
    timer = setTimeout(() => {
      refresh.removeAttribute('loading');
      list.removeAttribute('loading');
      list.items = ROWS;
      realTiles();
      then?.();
    }, ms);
  };
  const show = (speed) => {
    clearTimeout(timer);
    if (speed === 'first') { firstFrame(); return; }
    if (speed === 'fast') load(300);
    if (speed === 'slow') load(3000);
    if (speed === 'error') load(1200, () => { tiles.replaceChildren(); empty('error', 'Не удалось загрузить новости', 'Сервер не ответил за 30 секунд.'); });
    if (speed === 'empty') load(600, () => { tiles.replaceChildren(); empty('first-use', 'Новостей пока нет', 'Первая новость появится на сайте сразу после публикации.'); });
  };
  refresh.addEventListener('click', () => load(1500));
  $('#speed').addEventListener('sf-button-group-change', (event) => show(event.detail?.value ?? 'fast'));
  show('fast');
})();
