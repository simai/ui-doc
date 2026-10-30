// A host that lives on this page: it hands the list its letters and does what
// the person chose. The element stores nothing and changes nothing by itself.
const minute = 60 * 1000;
const day = 24 * 60 * minute;
const ago = (span) => new Date(Date.now() - span).toISOString();
let letters = [
  {id: 'prj_1', title: 'Осенняя рассылка', at: ago(5 * minute), blocks: 7},
  {id: 'prj_2', title: 'Приглашение', at: ago(day), blocks: 4},
  {id: 'prj_3', title: 'Анонс вебинара', at: ago(9 * day), blocks: 11},
  {id: 'prj_4', title: 'Летняя распродажа', at: ago(40 * day), blocks: 1},
];
let next = 5;

const list = document.getElementById('mail-letters-overview');
const show = () => { list.letters = letters; };
list.addEventListener('sf-mail-letters-open', (event) => list.setAttribute('current', event.detail.id));
list.addEventListener('sf-mail-letters-copy', (event) => {
  const letter = letters.find((entry) => entry.id === event.detail.id);
  letters = [{...letter, id: `prj_${next++}`, title: `${letter.title} (копия)`, at: ago(0)}, ...letters];
  show();
});
list.addEventListener('sf-mail-letters-rename', (event) => {
  letters = letters.map((entry) => (entry.id === event.detail.id ? {...entry, title: 'Новое название', at: ago(0)} : entry));
  show();
});
list.addEventListener('sf-mail-letters-delete', (event) => {
  letters = letters.filter((entry) => !event.detail.ids.includes(entry.id));
  show();
});
list.addEventListener('sf-mail-letters-create', () => {
  letters = [{id: `prj_${next++}`, title: 'Новое письмо', at: ago(0), blocks: 0}, ...letters];
  show();
});
show();
