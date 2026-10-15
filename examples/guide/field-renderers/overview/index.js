// The page is the host: it keeps the values, takes the writes and draws what
// the set returns into its own containers.
const demo = document.querySelector('[data-field-demo]');
const log = demo.querySelector('[data-field-log]');

// SF.whenFieldRenderers exists once the Loader has started.
function whenLoader() {
  if (window.SF?.whenFieldRenderers) return Promise.resolve();
  return new Promise((resolve) => window.addEventListener('sf-loader-init', resolve, {once: true}));
}

async function start() {
  await whenLoader();
  // No Smart tag brings the set: this loads it once from the Smart base and
  // settles when it has published itself.
  const set = await SF.whenFieldRenderers();
  const {html, render} = SF;

  const values = {title: 'SIMAI: Платежи', weight: 2.5, status: 'live', public: null};
  const fields = {
    title: {key: 'title', label: 'Название', propertyType: 'string', required: true},
    weight: {key: 'weight', label: 'Вес', propertyType: 'number', unit: 'кг'},
    status: {key: 'status', label: 'Статус', propertyType: 'choice', options: [
      {value: 'live', label: 'Опубликовано', color: 'success'},
      {value: 'draft', label: 'Черновик', color: 'warning'},
    ]},
    public: {key: 'public', label: 'Доступно всем', propertyType: 'boolean'},
  };
  const host = {
    setFieldValue(field, value) {
      values[field.key] = value;
      log.textContent = `setFieldValue: ${field.key} = ${JSON.stringify(value)}`;
      showValues();
    },
  };

  // null and `nothing` both mean «nothing to show»: the page draws a dash.
  const row = (label, content) => html`
    <div class="flex gap-1 items-cross-center">
      <span class="color-on-surface-variant">${label}</span>
      ${content === null || content === undefined || content === SF.nothing ? '—' : content}
    </div>`;

  function showValues() {
    render(Object.values(fields).map((field) =>
      row(field.label, set.renderViewField(field, values[field.key]))), demo.querySelector('[data-field-view]'));
  }

  showValues();
  render([
    row(fields.title.label, set.renderEditField(fields.title, values.title, host, {size: '1/2'})),
    row(fields.public.label, set.renderEditField(fields.public, values.public, host, {size: '1/2'})),
  ], demo.querySelector('[data-field-edit]'));
  demo.querySelector('[data-field-cell]').textContent =
    `renderCellField(status, 'live') →\n${JSON.stringify(set.renderCellField(fields.status, 'live'), null, 2)}`;
}

start().catch((error) => { log.textContent = error.message; });
