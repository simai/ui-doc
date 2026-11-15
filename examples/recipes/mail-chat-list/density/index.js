const at = (daysAgo, h, m) => { const d = new Date(); d.setDate(d.getDate() - daysAgo); d.setHours(h, m, 0, 0); return d.toISOString(); };
const FEW = [
  {id: 'm2', text: 'Анна Белова', supporting: 'Договор поставки на декабрь', avatar: {text: 'АБ'}, count: 3, date: at(0, 11, 20)},
  {id: 'm3', text: 'Ассистент Pro', supporting: 'Нужен ответ по заявке № 4417', avatar: {icon: 'smart_toy'}, badge: {text: 'Ждёт', tone: 'warning'}, date: at(0, 9, 5)},
  {id: 'm4', text: 'Пётр Гаврилов', supporting: 'Годовой отчёт', avatar: {text: 'ПГ'}, count: 1, date: at(1, 18, 40)}];
customElements.whenDefined('sf-list').then(() => document.querySelectorAll('sf-list[data-list="few"]').forEach((list) => { list.items = FEW; }));
