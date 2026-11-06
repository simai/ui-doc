// The avatar opens a menu of the person's own things: who is signed in,
// profile, notifications, theme, and sign-out last, apart from the rest.
const initialize = async () => {
  const root = document.querySelector('[data-solution-user="signed-in"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await Promise.all(['sf-avatar', 'sf-menu-context'].map((tag) => customElements.whenDefined(tag)));
  const anchor = root.querySelector('[data-user-anchor]');
  const menu = root.querySelector('sf-menu-context');
  const result = root.querySelector('[data-user-result]');
  const themes = {system: 'Как в системе', light: 'Светлая', dark: 'Тёмная'};
  const preference = () => window.SF?.Loader?.themePreference ?? 'system';

  const render = () => {
    menu.entries = [
      {type: 'heading', text: 'Анна Белова · anna@example.com'},
      {id: 'profile', text: 'Профиль', icon: 'person'},
      {id: 'notifications', text: 'Уведомления', icon: 'notifications', value: '3'},
      {id: 'theme', text: 'Тема', icon: 'contrast', value: themes[preference()], submenu: Object.entries(themes).map(([id, text]) => (
        {id: `theme:${id}`, text, kind: 'radio', checked: preference() === id}
      ))},
      {id: 'settings', text: 'Настройки', icon: 'settings'},
      {type: 'separator'},
      {id: 'sign-out', text: 'Выйти', icon: 'logout'},
    ];
  };

  render();
  anchor.addEventListener('click', () => menu.toggleFor(anchor, {align: 'start'}));
  anchor.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); menu.toggleFor(anchor); }
  });
  menu.addEventListener('sf-menu-context-select', (event) => {
    const {id} = event.detail;
    if (id.startsWith('theme:')) SF.Loader?.setTheme(id.slice(6));
    result.textContent = id === 'sign-out' ? 'Страница выводит человека и показывает кнопку «Войти».' : `Выбран пункт ${id}.`;
  });
  window.addEventListener('sf-theme-change', render);
};

initialize();
