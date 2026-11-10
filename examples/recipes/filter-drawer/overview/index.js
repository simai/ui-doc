// Filters live in a side panel; the list stays visible beside it. The apply
// button counts what it will show before it is pressed, the chosen filters
// stay above the list as tags that remove one each, and «Сбросить» clears
// them all. Nothing is applied until «Показать».
const orders = [
  {id: 'o1', text: 'Заказ 1042 · Анна Белова', supporting: '3 490 ₽ · Курьером', icon: 'receipt_long', status: 'new', delivery: 'courier'},
  {id: 'o2', text: 'Заказ 1041 · Пётр Ильин', supporting: '12 900 ₽ · Самовывоз', icon: 'receipt_long', status: 'paid', delivery: 'pickup'},
  {id: 'o3', text: 'Заказ 1040 · Мария Котова', supporting: '1 290 ₽ · Курьером', icon: 'receipt_long', status: 'sent', delivery: 'courier'},
  {id: 'o4', text: 'Заказ 1039 · Олег Сафин', supporting: '6 750 ₽ · Курьером', icon: 'receipt_long', status: 'paid', delivery: 'courier'},
  {id: 'o5', text: 'Заказ 1038 · Инна Ершова', supporting: '2 180 ₽ · Самовывоз', icon: 'receipt_long', status: 'cancelled', delivery: 'pickup'},
  {id: 'o6', text: 'Заказ 1037 · Глеб Орлов', supporting: '940 ₽ · Курьером', icon: 'receipt_long', status: 'new', delivery: 'courier'},
  {id: 'o7', text: 'Заказ 1036 · Вера Лаптева', supporting: '18 400 ₽ · Самовывоз', icon: 'receipt_long', status: 'sent', delivery: 'pickup'},
  {id: 'o8', text: 'Заказ 1035 · Денис Уваров', supporting: '4 120 ₽ · Курьером', icon: 'receipt_long', status: 'paid', delivery: 'courier'},
];
const LABELS = {new: 'Новый', paid: 'Оплачен', sent: 'Отправлен', cancelled: 'Отменён', courier: 'Курьером', pickup: 'Самовывоз'};
const plural = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'заказ' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'заказа' : 'заказов');

let applied = {status: [], delivery: 'any'};

const matching = ({status, delivery}) => orders.filter((order) => (!status.length || status.includes(order.status))
  && (delivery === 'any' || order.delivery === delivery));

// The panel may move its content into its own surface: look the parts up
// when they are needed rather than holding them from the start.
const part = (selector) => document.querySelector(selector);
const draft = () => ({
  status: [...document.querySelectorAll('#filters-form sf-checkbox[name="status"]')].filter((box) => box.checked).map((box) => box.getAttribute('value')),
  delivery: [...document.querySelectorAll('#filters-form sf-radio[name="delivery"]')].find((radio) => radio.checked)?.getAttribute('value') ?? 'any',
});
const showDraft = (state) => {
  document.querySelectorAll('#filters-form sf-checkbox[name="status"]').forEach((box) => { box.checked = state.status.includes(box.getAttribute('value')); });
  document.querySelectorAll('#filters-form sf-radio[name="delivery"]').forEach((radio) => { radio.checked = radio.getAttribute('value') === state.delivery; });
};
const countApply = () => {
  const n = matching(draft()).length;
  part('#filters-apply')?.setAttribute('text', n ? `Показать ${n} ${plural(n)}` : 'Заказов нет');
};

const render = () => {
  part('#orders').setItems({items: matching(applied), options: {hasMore: false}});
  const tags = part('#filters-applied');
  tags.replaceChildren();
  const chosen = [...applied.status.map((value) => ['status', value]), ...(applied.delivery === 'any' ? [] : [['delivery', applied.delivery]])];
  chosen.forEach(([key, value]) => {
    const tag = document.createElement('sf-tag');
    tag.setAttribute('kind', 'default');
    tag.setAttribute('closable', '');
    tag.setAttribute('text', LABELS[value]);
    tag.setAttribute('close-label', `Убрать фильтр «${LABELS[value]}»`);
    tag.addEventListener('sf-tag-close', () => {
      applied = key === 'status'
        ? {...applied, status: applied.status.filter((entry) => entry !== value)}
        : {...applied, delivery: 'any'};
      showDraft(applied);
      render();
    });
    tags.append(tag);
  });
  if (chosen.length) {
    const clear = document.createElement('sf-button');
    clear.setAttribute('appearance', 'ghost');
    clear.setAttribute('scheme', 'on-surface');
    clear.setAttribute('size', '1/2');
    clear.setAttribute('text', 'Сбросить все');
    clear.addEventListener('click', () => {
      applied = {status: [], delivery: 'any'};
      showDraft(applied);
      render();
    });
    tags.append(clear);
  }
  tags.hidden = !chosen.length;
  countApply();
};

// The list moves its slotted empty state while it draws its first frame:
// wait a few frames for it rather than reading it mid-move.
const settled = async (selector) => {
  for (let frame = 0; frame < 30; frame++) {
    const element = document.querySelector(selector);
    if (element) return element;
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return null;
};

const initialize = async () => {
  await Promise.all(['sf-list', 'sf-drawer', 'sf-button', 'sf-empty-state'].map((tag) => customElements.whenDefined(tag)));
  const root = part('#filters-root');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';

  const empty = await settled('#orders-empty');
  empty.actions = [{id: 'reset', text: 'Сбросить фильтры', appearance: 'outline'}];
  empty.addEventListener('sf-empty-state-action', () => {
    applied = {status: [], delivery: 'any'};
    showDraft(applied);
    render();
  });
  document.addEventListener('change', (event) => {
    if (event.target.closest?.('#filters-form')) countApply();
  });
  document.addEventListener('click', (event) => {
    const button = event.target.closest?.('sf-button');
    if (!button) return;
    if (button.id === 'filters-apply') {
      applied = draft();
      render();
      part('#orders-filters').close?.();
      docara.example.log('apply', applied);
    } else if (button.id === 'filters-clear') {
      showDraft({status: [], delivery: 'any'});
      countApply();
    }
  });
  document.addEventListener('submit', (event) => {
    if (event.target.id === 'filters-form') event.preventDefault();
  });

  render();
};

initialize();
