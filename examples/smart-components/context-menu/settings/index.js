// The settings are data: a value lives in its entry. The page hears changed and
// decides what the value means.
const menu = document.getElementById('menu-settings');
const status = document.getElementById('menu-settings-status');
menu.entries = [
  {type: 'group', text: 'Быстрые настройки', view: 'tiles', items: [
    {id: 'sound', type: 'switch', text: 'Звук', icon: 'volume_up', value: true},
    {id: 'night', type: 'switch', text: 'Ночь', icon: 'dark_mode', value: false},
    {id: 'alerts', type: 'switch', text: 'Сигналы', icon: 'notifications', value: true},
  ]},
  {type: 'heading', text: 'Вид'},
  {id: 'theme', type: 'choice', text: 'Тема', icon: 'contrast', options: [
    {id: 'system', text: 'Авто', icon: 'computer', checked: true},
    {id: 'light', text: 'Светлая', icon: 'light_mode'},
    {id: 'dark', text: 'Тёмная', icon: 'dark_mode'},
  ]},
  {id: 'lang', type: 'choice', view: 'drill', text: 'Язык', icon: 'translate', options: [
    {id: 'ru', text: 'Русский', checked: true},
    {id: 'en', text: 'English'},
    {id: 'kk', text: 'Қазақша'},
  ]},
  {id: 'scale', type: 'range', text: 'Масштаб', icon: 'format_size', value: 100, min: 80, max: 140, step: 10, unit: '%'},
];
menu.addEventListener('sf-context-menu-changed', (event) => {
  status.textContent = `${event.detail.id}: ${event.detail.value}`;
});
