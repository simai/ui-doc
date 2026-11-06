// Rows: the name at the start, the control at the end. Short choices are
// pills in the row, a boolean is a switch, a number is a slider.
const menu = document.getElementById('settings-rows');
const status = document.getElementById('settings-rows-status');
menu.entries = [
  {type: 'heading', text: 'Вид таблицы'},
  {id: 'density', type: 'choice', text: 'Плотность', options: [
    {id: 'compact', text: 'Плотно'},
    {id: 'normal', text: 'Обычно', checked: true},
  ]},
  {id: 'align', type: 'choice', text: 'Выравнивание', options: [
    {id: 'start', text: 'По левому краю', icon: 'format_align_left', checked: true},
    {id: 'center', text: 'По центру', icon: 'format_align_center'},
    {id: 'end', text: 'По правому краю', icon: 'format_align_right'},
  ]},
  {id: 'wrap', type: 'switch', text: 'Переносить строки', value: false},
  {id: 'stripes', type: 'switch', text: 'Полосы через строку', value: true},
  {type: 'separator'},
  {id: 'scale', type: 'range', text: 'Масштаб', value: 100, min: 80, max: 140, step: 10, unit: '%'},
];
menu.addEventListener('sf-menu-context-changed', (event) => {
  status.textContent = `${event.detail.id}: ${event.detail.value}`;
});
