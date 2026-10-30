// The results come from the site. This provider answers from a small list in
// memory, as a static index would; a real site fetches its index or its API.
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

const initialize = async () => {
  await customElements.whenDefined('sf-search');
  const search = document.querySelector('#search-field');
  if (!search || search.dataset.exampleReady === 'true') return;
  search.dataset.exampleReady = 'true';
  search.provider = provider;
  const status = document.querySelector('#search-field-status');
  search.addEventListener('sf-search-navigate', (event) => {
    // The example stays on this page: it reports the choice instead of following it.
    event.preventDefault();
    if (status) status.textContent = event.detail.action
      ? `Выбрано действие: ${event.detail.action}.`
      : `Выбрана страница: ${event.detail.href}.`;
  });
};

initialize();
