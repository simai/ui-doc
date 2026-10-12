document.querySelectorAll('[data-context-menu-demo="profile"]').forEach((demo) => {
  const anchor = demo.querySelector('[data-menu-anchor]');
  const menu = demo.querySelector('sf-context-menu');
  const result = demo.querySelector('[data-menu-result]');

  menu.entries = [
    {type: 'header', text: 'Анна Белова', caption: ['anna@example.com', 'Администратор']},
    {type: 'separator'},
    {type: 'choice', id: 'theme', text: 'Тема', options: [
      {id: 'light', text: 'Светлая', icon: 'light_mode', checked: true},
      {id: 'dark', text: 'Тёмная', icon: 'dark_mode'},
      {id: 'system', text: 'Как в системе', icon: 'contrast'},
    ]},
    {id: 'language', text: 'Язык', icon: 'translate', value: 'Русский',
      search: {placeholder: 'Найти язык', empty: 'Ничего не найдено'},
      submenu: [
        {id: 'ru', text: 'Русский', caption: 'Russian', kind: 'radio', checked: true, lang: 'ru'},
        {id: 'en', text: 'English', caption: 'English', kind: 'radio', lang: 'en'},
        {id: 'de', text: 'Deutsch', caption: 'German', kind: 'radio', lang: 'de'},
        {id: 'fr', text: 'Français', caption: 'French', kind: 'radio', lang: 'fr'},
      ]},
    {type: 'separator'},
    {type: 'note', text: 'Настройки сохраняются в этом браузере.'},
    {id: 'sign-out', text: 'Выйти', icon: 'logout', danger: true},
  ];

  anchor.addEventListener('click', () => menu.toggleFor(anchor));
  menu.addEventListener('sf-context-menu-select', (event) => {
    const {id, group} = event.detail;
    result.textContent = group ? `Тема: ${id}.` : `Выбран пункт ${id}.`;
  });
});
