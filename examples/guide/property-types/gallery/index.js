// Every property type of the renderer set, and every variant, drawn by the set
// itself in the view and in the edit. The list comes from the set's own
// registry (SF.fieldRenderers.registry), so a type added to the release shows
// up here without touching the page. The page is the host: it keeps the values,
// serves the record pickers a short list and takes every write.
const gallery = document.querySelector('[data-type-gallery]');
const list = gallery.querySelector('[data-gallery-rows]');
const log = gallery.querySelector('[data-gallery-log]');
const readonlyBox = gallery.querySelector('[data-gallery-readonly]');

function whenLoader() {
  if (window.SF?.whenFieldRenderers) return Promise.resolve();
  return new Promise((resolve) => window.addEventListener('sf-loader-init', resolve, {once: true}));
}

const people = [
  {value: 'u-1', label: 'Анна Ковалёва', avatarText: 'АК'},
  {value: 'u-2', label: 'Илья Сорокин', avatarText: 'ИС'},
];
const records = [
  {value: 'r-178', label: 'SIMAI: Платежи №178'},
  {value: 'r-201', label: 'SIMAI: Доставка №201'},
];
const regions = [
  {value: 'ru-tat', label: 'Татарстан'},
  {value: 'ru-mow', label: 'Москва'},
  {value: 'ru-spe', label: 'Санкт-Петербург'},
];
const statuses = [
  {value: 'live', label: 'Опубликовано', color: 'success'},
  {value: 'draft', label: 'Черновик', color: 'warning'},
  {value: 'archived', label: 'В архиве'},
];

// A sample field and value for a type and variant.
function sample(type, variant) {
  const field = {key: variant ? `${type}-${variant}` : type, propertyType: type, variant: variant || undefined};
  switch (type) {
    case 'string':
      if (variant === 'phone') return [field, '+7 900 123-45-67'];
      if (variant === 'password') return [field, {set: true}];
      return [{...field, placeholder: 'Название'}, 'SIMAI: Платежи'];
    case 'text': return [field, 'Приём платежей, возвраты и сверка с банком.'];
    case 'integer': return [{...field, unit: 'шт.'}, 12];
    case 'number': return variant === 'scale' ? [field, 64] : [{...field, unit: 'кг'}, 2.5];
    case 'date': return [field, '2026-10-25'];
    case 'datetime': return [field, '2026-10-25T10:30:00+03:00'];
    case 'boolean': return [field, true];
    case 'choice': return [{...field, options: statuses}, 'live'];
    case 'choices': return [{...field, options: statuses}, ['live', 'draft']];
    case 'user': return [field, people[0]];
    case 'record':
    case 'relation': return [field, records[0]];
    case 'lookup': return [{...field, options: regions}, regions[0]];
    case 'file':
      if (variant && variant.startsWith('image')) {
        // An image drawn here, so the gallery fetches nothing from another site.
        const href = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48"><rect width="64" height="48" fill="#dfe6fb"/><circle cx="20" cy="18" r="7" fill="#005bbe"/><path d="M0 48 24 26l14 12 10-8 16 18z" fill="#2f5bd3"/></svg>');
        const image = {label: 'Обложка.svg', mime: 'image/svg+xml', href};
        return [{...field, multiple: variant === 'image-list'}, variant === 'image-list' ? [image, image] : image];
      }
      return [field, {label: 'Договор.pdf', mime: 'application/pdf', size: 184320}];
    case 'color': return [field, '#005bbe'];
    case 'include': return [{...field, language: 'html'}, '<sf-button>Сохранить</sf-button>'];
    default: return [field, null];
  }
}

async function start() {
  await whenLoader();
  const set = await SF.whenFieldRenderers();
  const {html, render} = SF;
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ru';

  const rows = [];
  for (const entry of set.registry) {
    for (const variant of [null, ...entry.variants]) {
      const [field, value] = sample(entry.type, variant?.id);
      field.label = variant ? `${entry.label[lang]}: ${variant.label[lang]}` : entry.label[lang];
      rows.push({entry, variant, field, value});
    }
  }
  const values = Object.fromEntries(rows.map((row) => [row.field.key, row.value]));
  const pages = {user: people, record: records, relation: records};

  const host = {
    setFieldValue(field, value) {
      values[field.key] = value;
      log.textContent = `setFieldValue: ${field.key} = ${JSON.stringify(value)}`;
      draw();
    },
    getFieldOptionsPage(field) {
      return {items: pages[field.propertyType] || [], status: 'ready', nextCursor: null};
    },
    loadFieldOptions() {},
    getFieldOptionSearch() { return ''; },
    setFieldOptionSearch() {},
  };

  const nothing = (content) => (content === null || content === undefined || content === SF.nothing ? '—' : content);

  function draw() {
    const readonly = readonlyBox.hasAttribute('checked');
    render(rows.map(({entry, variant, field}) => {
      const shown = readonly ? {...field, readonly: true} : field;
      return html`
        <div class="grid grid-col-1 sm:grid-col-3 gap-2 items-cross-start">
          <div class="flex flex-col">
            <span>${field.label}</span>
            <code class="sf-body-small color-on-surface-variant">${entry.type}${variant ? ` · ${variant.id}` : ''}</code>
          </div>
          <div>${nothing(set.renderViewField(field, values[field.key], host))}</div>
          <div>${nothing(set.renderEditField(shown, values[field.key], host, {size: '1/2'}))}</div>
        </div>`;
    }), list);
  }

  readonlyBox.addEventListener('change', draw);
  draw();
}

start().catch((error) => { log.textContent = error.message; });
