// What the demonstration adds to the admin polygon's bundle (index.js).
//
// Only the solutions catalogue has data in this demonstration. Another row of
// the menu still opens: the page header takes its name, and in place of the
// list the page says where the data is. The catalogue row brings the list back.
const CATALOGUE = 'data.catalog';
const labels = new Map();
const collect = (value) => {
  if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === 'object') {
    if (typeof value.key === 'string' && typeof value.label === 'string') labels.set(value.key, value.label);
    Object.values(value).forEach(collect);
  }
};
fetch('assets/data/navigation.json').then((response) => response.json()).then(collect).catch(() => {});

let star = null;
const notice = document.createElement('div');
notice.className = 'admin-demo-section';
notice.hidden = true;
notice.setAttribute('role', 'status');

addEventListener('sf-admin-menu-navigate', (event) => {
  const key = event.detail?.key;
  const header = document.querySelector('#page-header');
  const view = document.querySelector('#solutions');
  const state = document.querySelector('#state');
  if (!header || !view) return;
  if (!notice.isConnected) view.before(notice);
  const catalogue = key === CATALOGUE;
  header.setAttribute('heading', catalogue ? labels.get(CATALOGUE) ?? 'Каталог решений' : labels.get(key) ?? 'Раздел');
  // The second crumb names the menu's top row the section is under.
  const crumbs = header.querySelector('sf-breadcrumbs');
  const root = labels.get(String(key).split('.')[0]);
  if (crumbs && root) crumbs.items = [{label: 'simai.ru', href: '/'}, {label: root, href: '/'}];
  // The star is the catalogue's favourite: another section hides it.
  if (!catalogue && header.hasAttribute('star')) { star = header.getAttribute('star'); header.removeAttribute('star'); }
  if (catalogue && star !== null) { header.setAttribute('star', star); star = null; }
  view.hidden = !catalogue;
  if (state) state.hidden = !catalogue;
  notice.hidden = catalogue;
  notice.textContent = 'В этой демонстрации данные есть только в разделе «Каталог решений» — откройте его в меню.';
});

// In the narrow list the table opens a record on a double click or from the
// row's menu, while the wide table's title is a link: here the list's title
// opens it with one click too, as the table's own double click does.
document.addEventListener('click', (event) => {
  if (event.button !== 0 || event.detail > 1) return;
  const title = event.target.closest?.('.sf-table-list-title');
  const item = title?.closest('.sf-table-list-item');
  if (!item) return;
  item.dispatchEvent(new MouseEvent('dblclick', {bubbles: true, composed: true, cancelable: true}));
});
