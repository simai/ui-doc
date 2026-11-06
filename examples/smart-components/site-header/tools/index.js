// One header with all four solutions: search, language, theme and the user menu.
const data = {
  "groups": [
    {
      "id": "pages",
      "label": "Страницы"
    },
    {
      "id": "components",
      "label": "Компоненты"
    },
    {
      "id": "actions",
      "label": "Действия"
    }
  ],
  "popular": [
    "таблица",
    "тема",
    "кнопка"
  ],
  "items": [
    {
      "id": "buttons",
      "group": "components",
      "title": "Кнопки",
      "path": [
        "Смарт-компоненты",
        "Действия"
      ],
      "href": "/ru/smart-components/actions/buttons/",
      "icon": "smart_button"
    },
    {
      "id": "pagination",
      "group": "components",
      "title": "Пагинация",
      "path": [
        "Смарт-компоненты",
        "Навигация"
      ],
      "href": "/ru/smart-components/navigation/pagination/",
      "icon": "last_page"
    },
    {
      "id": "contents",
      "group": "components",
      "title": "Оглавление",
      "path": [
        "Смарт-компоненты",
        "Навигация"
      ],
      "href": "/ru/smart-components/navigation/contents/",
      "icon": "toc"
    },
    {
      "id": "table",
      "group": "pages",
      "title": "Таблица в рамке",
      "path": [
        "Утилиты",
        "Таблицы"
      ],
      "href": "/ru/utilities/tables/table-frame/",
      "icon": "table",
      "text": "рамка прокрутка"
    },
    {
      "id": "themes",
      "group": "pages",
      "title": "Тёмная тема",
      "path": [
        "Основы",
        "Цвет"
      ],
      "href": "/ru/guide/colour/all-tokens/",
      "icon": "contrast",
      "text": "тема цвет"
    },
    {
      "id": "quick-start",
      "group": "pages",
      "title": "Быстрый старт",
      "path": [
        "Руководство",
        "Введение"
      ],
      "href": "/ru/guide/introduction/quick-start/",
      "icon": "rocket_launch",
      "text": "подключение cdn npm"
    },
    {
      "id": "theme",
      "group": "actions",
      "title": "Сменить тему",
      "path": "Команда",
      "action": "theme",
      "icon": "contrast",
      "shortcut": "⇧⌘L"
    },
    {
      "id": "copy-link",
      "group": "actions",
      "title": "Скопировать ссылку на страницу",
      "path": "Команда",
      "action": "copy-link",
      "icon": "link"
    }
  ]
};

const words = (text) => String(text ?? '').toLowerCase();
const provider = async (query) => {
  const q = words(query).trim();
  if (!q) return {groups: data.groups, popular: data.popular, items: data.items.filter((item) => item.action)};
  const items = data.items.filter((item) => q.split(/\s+/).every((word) => words([item.title, item.path, item.text].flat().join(' ')).includes(word)));
  return {groups: data.groups, popular: data.popular, items};
};

const languages = [{code: 'ru', name: 'Русский'}, {code: 'en', name: 'English'}];

const initialize = async () => {
  const root = document.querySelector('[data-solution-header]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await Promise.all(['sf-header-site', 'sf-search', 'sf-menu-context', 'sf-avatar'].map((tag) => customElements.whenDefined(tag)));
  const result = root.querySelector('[data-header-result]');

  const search = root.querySelector('sf-search');
  search.provider = provider;
  search.addEventListener('sf-search-navigate', (event) => {
    event.preventDefault();
    result.textContent = `Поиск: выбрана страница ${event.detail.href ?? event.detail.action}.`;
  });

  const languageButton = root.querySelector('[data-header-language]');
  const languageMenu = root.querySelector('[data-header-language-menu]');
  let language = 'ru';
  const renderLanguages = () => {
    languageMenu.entries = languages.map((item) => ({id: item.code, text: item.name, lang: item.code, kind: 'radio', checked: item.code === language}));
  };
  renderLanguages();
  languageButton.addEventListener('click', () => languageMenu.toggleFor(languageButton));
  languageMenu.addEventListener('sf-menu-context-select', (event) => {
    language = event.detail.id;
    SF.language.use(language);
    root.lang = language;
    const name = languages.find((item) => item.code === language).name;
    languageButton.setAttribute('aria-label', `Язык: ${name}`);
    renderLanguages();
    result.textContent = `Язык: ${name}.`;
  });

  const avatar = root.querySelector('[data-header-user]');
  const userMenu = root.querySelector('[data-header-user-menu]');
  userMenu.entries = [
    {type: 'heading', text: 'Анна Белова'},
    {id: 'profile', text: 'Профиль', icon: 'person'},
    {id: 'settings', text: 'Настройки', icon: 'settings'},
    {type: 'separator'},
    {id: 'sign-out', text: 'Выйти', icon: 'logout'},
  ];
  const openUser = () => userMenu.toggleFor(avatar, {align: 'end'});
  avatar.addEventListener('click', openUser);
  avatar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openUser(); }
  });
  userMenu.addEventListener('sf-menu-context-select', (event) => {
    result.textContent = `Меню пользователя: ${event.detail.id}.`;
  });
};

initialize();
