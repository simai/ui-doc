// The panel reports the chosen tab; the page puts that tab's rows into the
// content slot. The head with the tabs stays, the rows scroll, the width holds.
const demo = document.querySelector('[data-context-menu-demo="panel"]');
const menu = demo.querySelector('sf-context-menu');
const rows = demo.querySelector('[data-panel-rows]');
const result = demo.querySelector('[data-panel-result]');

const tabs = {
  0: ['Название', 'Статус', 'Ответственный', 'Срок', 'Создано', 'Изменено', 'Теги', 'Приоритет'],
  1: ['Таблица', 'Карточки', 'Список'],
};
const labels = ['Поля', 'Вид'];

function show(index) {
  rows.replaceChildren(...tabs[index].map((text, position) => {
    const row = document.createElement('label');
    row.className = 'sf-context-menu-row';
    row.innerHTML = '<span class="sf-context-menu-row-text"></span><sf-checkbox></sf-checkbox>';
    row.querySelector('.sf-context-menu-row-text').textContent = text;
    if (index === 1 ? position === 0 : position < 4) row.querySelector('sf-checkbox').setAttribute('checked', '');
    return row;
  }));
  result.textContent = `Открыта вкладка «${labels[index]}».`;
}

menu.addEventListener('sf-context-menu-tab', (event) => show(event.detail.index));
show(0);
