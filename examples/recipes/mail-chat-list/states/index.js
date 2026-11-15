const at = (daysAgo, h, m) => { const d = new Date(); d.setDate(d.getDate() - daysAgo); d.setHours(h, m, 0, 0); return d.toISOString(); };
const MANY = [
  {id: 'm1', text: 'Новости SIMAI', supporting: 'Вышла новая версия SIMAI Framework', avatar: {icon: 'campaign', shape: 'square'}, pinned: true, date: at(0, 8, 0)},
  {id: 'm2', text: 'Анна Белова', supporting: 'Договор поставки на декабрь', avatar: {text: 'АБ'}, count: 3, date: at(0, 11, 20)},
  {id: 'm3', text: 'Ассистент Pro', supporting: 'Нужен ответ по заявке № 4417', avatar: {icon: 'smart_toy'}, badge: {text: 'Ждёт', tone: 'warning'}, date: at(0, 9, 5)},
  {id: 'm4', text: 'Пётр Гаврилов', supporting: 'Годовой отчёт', avatar: {text: 'ПГ'}, count: 1, date: at(1, 18, 40)},
  {id: 'o2', text: 'Ирина Седова', supporting: 'Встреча перенесена на четверг', avatar: {text: 'ИС'}, date: at(8, 9, 30)}];
customElements.whenDefined('sf-list').then(() => {
  document.getElementById('empty-list').items = [];
  document.getElementById('many-list').items = MANY;
});
