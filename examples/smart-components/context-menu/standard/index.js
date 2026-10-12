document.querySelectorAll('[data-context-menu-demo="standard"]').forEach((demo) => {
  const anchor = demo.querySelector('[data-menu-anchor]');
  const menu = demo.querySelector('sf-context-menu');
  const result = demo.querySelector('[data-menu-result]');
  const state = {lang: 'lang:ru', pinned: false};

  const render = () => {
    menu.entries = [
      {type: 'heading', text: 'Страница'},
      {id: 'rename', text: 'Переименовать', icon: 'edit', shortcut: 'F2'},
      {id: 'lang', text: 'Язык', icon: 'translate', value: state.lang === 'lang:ru' ? 'Русский' : 'English', submenu: [
        {id: 'lang:ru', text: 'Русский', kind: 'radio', checked: state.lang === 'lang:ru'},
        {id: 'lang:en', text: 'English', kind: 'radio', checked: state.lang === 'lang:en', lang: 'en'},
      ]},
      {id: 'pin', text: 'Закрепить', icon: 'push_pin', kind: 'check', checked: state.pinned},
      {type: 'separator'},
      {id: 'archive', text: 'В архив', icon: 'archive', danger: true, caption: 'Можно вернуть'},
    ];
  };

  render();
  anchor.addEventListener('click', () => menu.toggleFor(anchor));
  menu.addEventListener('sf-context-menu-select', (event) => {
    const {id, checked} = event.detail;
    if (id === 'pin') state.pinned = checked;
    if (id.startsWith('lang:')) state.lang = id;
    render();
    result.textContent = `Выбран пункт ${id}.`;
  });
});
