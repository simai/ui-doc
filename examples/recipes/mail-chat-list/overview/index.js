const at = (daysAgo, h, m) => { const d = new Date(); d.setDate(d.getDate() - daysAgo); d.setHours(h, m, 0, 0); return d.toISOString(); };
const MAIL = [
  {id: 'm1', text: 'Новости SIMAI', supporting: 'Вышла новая версия SIMAI Framework', avatar: {icon: 'campaign', shape: 'square'}, pinned: true, date: at(0, 8, 0)},
  {id: 'm2', text: 'Анна Белова', supporting: 'Договор поставки на декабрь — пришлю после обеда', avatar: {text: 'АБ'}, count: 3, date: at(0, 11, 20)},
  {id: 'm3', text: 'Ассистент Pro', supporting: 'Нужен ответ по заявке № 4417', avatar: {icon: 'smart_toy'}, badge: {text: 'Ждёт', tone: 'warning'}, date: at(0, 9, 5)},
  {id: 'm4', text: 'Пётр Гаврилов', supporting: 'Годовой отчёт: последняя версия таблицы', avatar: {text: 'ПГ'}, count: 1, date: at(1, 18, 40)},
  {id: 'm5', text: 'ООО «Аквабур»', supporting: 'Счёт № 1182 за ноябрь', avatar: {text: 'АБ', shape: 'square'}, date: at(1, 10, 15)},
  {id: 'm6', text: 'Мария Кузнецова', supporting: 'Фото с объекта, 12 файлов', avatar: {text: 'МК'}, date: at(3, 16, 2)}];
const OLDER = [
  {id: 'o1', text: 'Служба доставки', supporting: 'Заказ № 10231 доставлен', avatar: {icon: 'local_shipping', shape: 'square'}, date: at(7, 12, 0)},
  {id: 'o2', text: 'Ирина Седова', supporting: 'Встреча перенесена на четверг', avatar: {text: 'ИС'}, date: at(8, 9, 30)},
  {id: 'o3', text: 'Larena', supporting: 'Резервная копия готова', avatar: {icon: 'backup', shape: 'square'}, date: at(8, 3, 0)},
  {id: 'o4', text: 'Олег Миронов', supporting: 'Смета на монтаж', avatar: {text: 'ОМ'}, date: at(9, 14, 45)}];
const ACTIONS = [{id: 'read', text: 'Прочитано', icon: 'drafts'}, {id: 'archive', text: 'В архив', icon: 'archive'}, {id: 'delete', text: 'Удалить', icon: 'delete', destructive: true}];
const THREAD = [
  {id: 'f1', author: 'anna', 'author-name': 'Анна Белова', text: 'Добрый день! Договор поставки на декабрь почти готов.'},
  {id: 'f2', author: 'me', own: true, text: 'Спасибо. Объём тот же — 40 насосов?'},
  {id: 'f3', author: 'anna', 'author-name': 'Анна Белова', text: 'Да, и 12 фильтров сверху. Пришлю после обеда.'}];
Promise.all(['sf-list', 'sf-list-feed'].map((t) => customElements.whenDefined(t))).then(() => {
  const inbox = document.getElementById('inbox');
  let rows = MAIL.slice(), more = true;
  const draw = () => { inbox.items = rows; inbox.actions = ACTIONS; inbox.toggleAttribute('has-more', more); };
  draw();
  document.getElementById('mail-thread').items = THREAD;
  inbox.addEventListener('sf-list-open', (event) => {
    const id = event.detail.id;
    inbox.setAttribute('selected', id);
    rows = rows.map((row) => { if (row.id !== id) return row; const {count, ...rest} = row; return rest; });
    draw();
    document.getElementById('mail-subject').textContent = rows.find((row) => row.id === id)?.supporting ?? '';
  });
  inbox.addEventListener('sf-list-load-more', () => {
    if (!more) return;
    more = false;
    setTimeout(() => { rows = rows.concat(OLDER); draw(); }, 600);
  });
});
