// Submenus open in the same panel; the header leads back a level.
document.querySelectorAll('[data-context-menu-demo="drill"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const menu = demo.querySelector('sf-menu-context');
  const state = {sort: 'date', group: 'none'};
  const sorts = [['date', 'По дате изменения'], ['name', 'По названию'], ['size', 'По размеру файла, от большого к маленькому']];
  const groups = [['none', 'Без групп'], ['type', 'По типу'], ['owner', 'По владельцу']];
  const render = () => {
    menu.entries = [
      {id: 'sort', text: 'Сортировка', icon: 'sort', value: sorts.find(([id]) => id === state.sort)[1], submenu:
        sorts.map(([id, text]) => ({id: `sort:${id}`, text, kind: 'radio', checked: state.sort === id}))},
      {id: 'group', text: 'Группировка', icon: 'view_agenda', value: groups.find(([id]) => id === state.group)[1], submenu:
        groups.map(([id, text]) => ({id: `group:${id}`, text, kind: 'radio', checked: state.group === id}))},
      {type: 'separator'},
      {id: 'reset', text: 'Вернуть вид по умолчанию', icon: 'restart_alt'},
    ];
  };
  render();
  anchor.addEventListener('click', () => menu.toggleFor({anchor}));
  menu.addEventListener('sf-menu-context-select', (event) => {
    const [key, value] = event.detail.id.split(':');
    if (value) state[key] = value;
    if (event.detail.id === 'reset') Object.assign(state, {sort: 'date', group: 'none'});
    render();
  });
});
