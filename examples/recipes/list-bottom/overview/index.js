const NAMES = ['Иванов А.', 'ООО «Ромашка»', 'Петрова Е.', 'Сидоров К.', 'ИП Белов', 'Кузнецова М.'];
const rows = (from, n) => Array.from({length: n}, (_, i) => {
  const k = from + i;
  return {id: 'o' + k, text: `Заказ № ${10230 + k} · ${NAMES[k % NAMES.length]}`, supporting: `${(1200 + (k * 37) % 9000).toLocaleString('ru-RU')} ₽ · ${k % 3 ? 'оплачен' : 'ждёт оплаты'}`, icon: 'receipt_long'};
});
Promise.all(['sf-list', 'sf-pagination', 'sf-button', 'sf-segmented'].map((t) => customElements.whenDefined(t))).then(() => {
  const $ = (id) => document.getElementById(id);
  const list = $('orders'), pages = $('orders-pages'), range = $('orders-range'), size = $('orders-size'), foot = $('orders-foot'), scope = $('bottom-scope');
  const total = 340;
  let kind = 'field', per = 20, page = 1, shown = 20;
  const draw = () => {
    if (kind === 'more') { list.items = rows(0, 5); return; }
    const from = (page - 1) * per;
    list.items = rows(from, 5);
    range.textContent = `${from + 1}–${Math.min(from + per, total)} из ${total}`;
  };
  $('bottom-kind').addEventListener('change', (event) => {
    kind = event.detail.value; page = 1; shown = 20;
    const admin = kind === 'field';
    scope.toggleAttribute('data-sf-density', admin);
    if (admin) scope.setAttribute('data-sf-density', 'compact');
    pages.setAttribute('appearance', kind);
    pages.setAttribute('size', admin ? '1/2' : '1');
    pages.setAttribute('current', '1');
    pages.setAttribute('total', kind === 'numbers' ? '1240' : String(total));
    size.hidden = !admin; range.hidden = !admin;
    foot.classList.toggle('is-center', !admin);
    draw();
  });
  pages.addEventListener('sf-pagination-change', (event) => { page = event.detail.current; pages.setAttribute('current', String(page)); draw(); });
  pages.addEventListener('sf-pagination-load-more', () => {
    pages.setAttribute('show-more-busy', '');
    setTimeout(() => { pages.removeAttribute('show-more-busy'); shown = Math.min(total, shown + per); pages.setAttribute('current', String(Math.ceil(shown / per))); }, 700);
  });
  size.addEventListener('sf-button-select', (event) => {
    const id = event.detail?.id; if (!id) return;
    per = Number(id); page = 1;
    size.setAttribute('text', 'По ' + id);
    pages.setAttribute('page-size', id); pages.setAttribute('current', '1');
    draw();
  });
  draw();
});
