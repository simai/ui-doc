// Tiles: the settings used most stand on top as tiles; a press toggles a
// switch. The rest follow as ordinary rows.
const menu = document.getElementById('settings-tiles');
const status = document.getElementById('settings-tiles-status');
menu.entries = [
  {type: 'group', text: 'Быстрые настройки', view: 'tiles', items: [
    {id: 'sound', type: 'switch', text: 'Звук', icon: 'volume_up', value: true},
    {id: 'night', type: 'switch', text: 'Ночь', icon: 'dark_mode', value: false},
    {id: 'alerts', type: 'switch', text: 'Сигналы', icon: 'notifications', value: true},
  ]},
  {type: 'separator'},
  {id: 'theme', type: 'choice', text: 'Тема', icon: 'contrast', options: [
    {id: 'system', text: 'Авто', icon: 'computer', checked: true},
    {id: 'light', text: 'Светлая', icon: 'light_mode'},
    {id: 'dark', text: 'Тёмная', icon: 'dark_mode'},
  ]},
  {id: 'scale', type: 'range', text: 'Масштаб', icon: 'format_size', value: 100, min: 80, max: 140, step: 10, unit: '%'},
];
menu.addEventListener('sf-menu-context-changed', (event) => {
  status.textContent = `${event.detail.id}: ${event.detail.value}`;
});
