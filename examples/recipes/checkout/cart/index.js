// A shop cart: a box on the left of every line, a box per maker and «Выбрать
// все» above them; «Удалить выбранные» removes the chosen lines at once. Each
// line's quantity field has the remove mode: at 1 its minus turns into a bin.
// The cart is the buyer's own and can be brought back, so nothing is asked:
// the lines go and the message offers «Вернуть» (C25).
(async () => {
  const lines = [
    {id: 'puer', maker: 'yunnan', name: 'Пуэр «Старое дерево», 100 г', price: 890, count: 2, chosen: true},
    {id: 'oolong', maker: 'yunnan', name: 'Улун «Молочный», 50 г', price: 540, count: 1, chosen: true},
    {id: 'teapot', maker: 'clay', name: 'Чайник глиняный, 250 мл', price: 2400, count: 1, chosen: true},
    {id: 'bowl', maker: 'clay', name: 'Пиала, 80 мл', price: 450, count: 2, chosen: true},
  ];
  const makers = [
    {id: 'yunnan', name: 'Чайная фабрика «Юньнань»'},
    {id: 'clay', name: 'Мастерская «Глина»'},
  ];
  const money = (value) => value.toLocaleString('ru-RU') + ' ₽';
  const goods = (n) => {
    const plural = new Intl.PluralRules('ru').select(n);
    return `${n} ${{one: 'товар', few: 'товара', many: 'товаров'}[plural] ?? 'товара'}`;
  };

  // The quantity fields are drawn by the page below; the loader fetches their
  // component when the first one is placed, so only the parts already in the
  // markup are awaited here.
  await Promise.all(['sf-checkbox', 'sf-button'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const all = $('#cart-all');
  const remove = $('#cart-delete');
  const groups = $('#cart-groups');
  const summary = $('#cart-summary');
  const empty = $('#cart-empty');
  const heading = $('#cart-heading');

  // A box that stands for several: checked when all are, mixed when some are.
  const mark = (box, items) => {
    const chosen = items.filter((line) => line.chosen).length;
    box.checked = items.length > 0 && chosen === items.length;
    box.indeterminate = chosen > 0 && chosen < items.length;
  };

  const sync = () => {
    mark(all, lines);
    groups.querySelectorAll('[data-maker-box]').forEach((box) => mark(box, lines.filter((line) => line.maker === box.dataset.makerBox)));
    groups.querySelectorAll('[data-line-box]').forEach((box) => { box.checked = lines.find((line) => line.id === box.dataset.lineBox)?.chosen ?? false; });
    const chosen = lines.filter((line) => line.chosen);
    remove.disabled = chosen.length === 0;
    const count = chosen.reduce((sum, line) => sum + line.count, 0);
    const total = chosen.reduce((sum, line) => sum + line.count * line.price, 0);
    summary.innerHTML = '';
    if (lines.length === 0) return;
    const label = document.createElement('span');
    label.textContent = chosen.length ? `Выбрано: ${goods(count)}` : 'Ничего не выбрано';
    const sum = document.createElement('span');
    sum.className = 'wrap-none';
    sum.textContent = money(total);
    summary.append(label, sum);
  };

  const lineRow = (line) => {
    const row = document.createElement('div');
    row.className = 'flex flex-wrap items-cross-center gap-x-1 gap-y-1/2 p-y-1/2 border-bottom-1 border-bottom-solid border-outline-variant';
    row.dataset.line = line.id;
    // The name takes the room; the quantity and the price keep to the end
    // and go under the name together on a narrow screen.
    const name = document.createElement('div');
    name.className = 'grow min-w-0';
    const box = document.createElement('sf-checkbox');
    box.setAttribute('label', line.name);
    box.dataset.lineBox = line.id;
    name.append(box);
    const end = document.createElement('div');
    end.className = 'flex items-cross-center gap-1 m-inline-start-auto';
    const quantity = document.createElement('sf-input-quantity');
    quantity.setAttribute('size', '1/2');
    quantity.setAttribute('min', '1');
    quantity.setAttribute('max', '20');
    quantity.setAttribute('value', String(line.count));
    quantity.setAttribute('removable', '');
    quantity.setAttribute('remove-label', 'Удалить из корзины');
    quantity.setAttribute('aria-label', `Количество: ${line.name}`);
    quantity.dataset.lineCount = line.id;
    const price = document.createElement('span');
    price.className = 'wrap-none text-end';
    price.style.minWidth = '6em';
    price.dataset.linePrice = line.id;
    price.textContent = money(line.price * line.count);
    end.append(quantity, price);
    row.append(name, end);
    return row;
  };

  const render = () => {
    groups.innerHTML = '';
    for (const maker of makers) {
      const own = lines.filter((line) => line.maker === maker.id);
      if (own.length === 0) continue;
      const group = document.createElement('section');
      group.className = 'flex flex-col';
      group.setAttribute('aria-label', maker.name);
      const head = document.createElement('div');
      head.className = 'p-y-1/2 weight-5';
      const box = document.createElement('sf-checkbox');
      box.setAttribute('label', maker.name);
      box.dataset.makerBox = maker.id;
      head.append(box);
      group.append(head, ...own.map(lineRow));
      groups.append(group);
    }
    empty.hidden = lines.length > 0;
    all.closest('div').hidden = lines.length === 0;
    sync();
  };

  // Lines go at once; «Вернуть» puts them back where they stood.
  const take = (ids, message) => {
    const before = lines.map((line) => ({...line}));
    for (let at = lines.length - 1; at >= 0; at -= 1) if (ids.includes(lines[at].id)) lines.splice(at, 1);
    render();
    // The focus goes to «Выбрать все», or to the heading of an empty cart.
    (lines.length ? all.querySelector('input') : heading)?.focus();
    SF.notify({status: 'neutral', icon: 'delete', title: message, action: {label: 'Вернуть', onSelect: () => {
      lines.splice(0, lines.length, ...before);
      render();
    }}});
  };

  groups.addEventListener('change', (event) => {
    const lineBox = event.target.closest('[data-line-box]');
    const makerBox = event.target.closest('[data-maker-box]');
    const quantity = event.target.closest('[data-line-count]');
    if (lineBox) {
      const line = lines.find((item) => item.id === lineBox.dataset.lineBox);
      if (line) line.chosen = lineBox.checked;
    } else if (makerBox) {
      lines.filter((line) => line.maker === makerBox.dataset.makerBox).forEach((line) => { line.chosen = makerBox.checked; });
    } else if (quantity) {
      const line = lines.find((item) => item.id === quantity.dataset.lineCount);
      const value = Number(event.detail?.value ?? quantity.value);
      if (line && value >= 1) {
        line.count = value;
        groups.querySelector(`[data-line-price="${line.id}"]`).textContent = money(line.price * line.count);
      }
    } else {
      return;
    }
    sync();
  });
  // The field only asks to remove its line; the page removes it.
  groups.addEventListener('sf-input-quantity-remove', (event) => {
    const quantity = event.target.closest('[data-line-count]');
    const line = quantity && lines.find((item) => item.id === quantity.dataset.lineCount);
    if (line) take([line.id], `Удалено из корзины: ${line.name}`);
  });
  all.addEventListener('change', () => {
    const checked = all.checked;
    lines.forEach((line) => { line.chosen = checked; });
    sync();
  });
  remove.addEventListener('click', () => {
    const chosen = lines.filter((line) => line.chosen);
    if (chosen.length === 0) return;
    const count = chosen.reduce((sum, line) => sum + line.count, 0);
    take(chosen.map((line) => line.id), `Удалено из корзины: ${goods(count)}`);
  });

  render();
})();
