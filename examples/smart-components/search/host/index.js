// A host of simai.search-port, answering from memory as a server would. It
// announces every capability, so the window shows the correction and, on a wide
// screen, the preview pane.
const search = document.getElementById('search-host');
const status = document.getElementById('search-host-status');
const pages = [
  {id: 'table-frame', group: 'pages', title: 'Таблица в рамке', path: 'Утилиты › Таблицы', kind: 'page', url: '#table-frame', icon: 'table', words: 'Таблица в скруглённой рамке, прокручивается вбок.'},
  {id: 'data-view', group: 'pages', title: 'Таблицы данных', path: 'SIMAI Pro › Данные', kind: 'page', url: '#data-view', icon: 'dataset', words: 'Сортировка, фильтры и выбор строк.'},
  {id: 'theme', group: 'commands', title: 'Сменить тему', kind: 'action', icon: 'contrast', shortcut: 'T'},
];
const scopes = [{id: 'pages', label: 'Страницы'}, {id: 'commands', label: 'Команды'}];
let recent = ['таблица'];

search.addEventListener('sf-search-navigate', (event) => {
  event.preventDefault();
  status.textContent = `Выбрано: ${event.detail.href || event.detail.action}`;
});

customElements.whenDefined('sf-search').then(() => search.connectPort({
  port: 'simai.search-port',
  version: '1.0.0',
  capabilities: ['scopes', 'recent', 'popular', 'actions', 'preview', 'spelling'],
  async raise(intent, payload) {
    if (intent === 'query.change') {
      const query = payload.query.toLowerCase();
      const misspelt = query === 'тблица';
      const results = pages.filter((page) => {
        if (misspelt) return page.kind === 'page';
        return query ? page.title.toLowerCase().includes(query.slice(0, 3)) : page.kind === 'action';
      });
      const data = {results: results.map(({words, ...result}) => result), echo: {query: payload.query, scope: payload.scope ?? null}, scopes, recent, popular: ['таблица', 'тема']};
      if (misspelt) data.correction = {query: 'таблица', total: 2};
      return {answer: 'applied', sequence: payload.sequence, data};
    }
    if (intent === 'result.preview') {
      const page = pages.find((entry) => entry.id === payload.id);
      return {answer: 'applied', sequence: payload.sequence, data: {preview: {id: payload.id, title: page?.title ?? null, path: page?.path ?? null, text: page?.words ?? null}}};
    }
    if (intent === 'recent.forget') {
      recent = recent.filter((entry) => entry !== payload.query);
      return {answer: 'applied', data: {recent}};
    }
    if (intent === 'recent.clear') {
      recent = [];
      return {answer: 'applied', data: {recent}};
    }
    if (intent === 'result.open' || intent === 'action.run') return {answer: 'applied', data: {recent}};
    return {answer: 'unavailable', reason: 'intent-unknown'};
  },
}));
