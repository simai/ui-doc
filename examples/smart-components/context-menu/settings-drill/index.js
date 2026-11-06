// Drill: the current value stands under the name; a press opens the options
// in the same panel with a way back. A switch stays in its row.
const menu = document.getElementById('settings-drill');
const status = document.getElementById('settings-drill-status');
menu.entries = [
  {id: 'theme', type: 'choice', view: 'drill', text: 'Тема', icon: 'contrast', options: [
    {id: 'system', text: 'Как в системе', checked: true},
    {id: 'light', text: 'Светлая'},
    {id: 'dark', text: 'Тёмная'},
  ]},
  {id: 'lang', type: 'choice', view: 'drill', text: 'Язык', icon: 'translate', options: [
    {id: 'ru', text: 'Русский', checked: true},
    {id: 'en', text: 'English'},
    {id: 'kk', text: 'Қазақша'},
    {id: 'de', text: 'Deutsch'},
  ]},
  {id: 'font', type: 'choice', view: 'drill', text: 'Размер текста', icon: 'format_size', options: [
    {id: 's', text: 'Мелкий'},
    {id: 'm', text: 'Обычный', checked: true},
    {id: 'l', text: 'Крупный'},
  ]},
  {id: 'sound', type: 'switch', text: 'Звук', icon: 'volume_up', value: true},
];
menu.addEventListener('sf-menu-context-changed', (event) => {
  status.textContent = `${event.detail.id}: ${event.detail.value}`;
});
