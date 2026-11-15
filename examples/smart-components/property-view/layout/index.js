// Arranging a view, answered by a host that lives on this page.
//
// The card resolves two layers over the stored record: the shared one, which
// this person may not write (the host says why), and the personal one, which
// «Настроить вид» writes. Every change is saved at once with view.save and
// the layer's revision; «Сбросить» removes the personal layer with view.reset
// and the card shows what lies under it.
const base = {
  record_id: 'record-demo-contract',
  collection: 'docs.demo_contracts',
  revision: 7,
  label: 'Договор поставки № 41/2026',
  sections: [
    {
      key: 'main',
      label: 'Договор',
      icon: 'description',
      groups: [
        {
          key: 'terms',
          label: 'Условия',
          columns: 2,
          fields: [
            { key: 'number', label: 'Номер', propertyType: 'string', value: '41/2026', width: 'half' },
            { key: 'signed', label: 'Подписан', propertyType: 'date', value: '2026-10-02', width: 'half' },
            { key: 'amount', label: 'Сумма, ₽', propertyType: 'string', value: '1 280 000', width: 'half' },
            { key: 'payment', label: 'Оплата', propertyType: 'string', value: '50 % вперёд, остаток за 10 дней', width: 'half' },
            { key: 'subject', label: 'Предмет', propertyType: 'text', value: 'Поставка кофемолок КМ-200, 250 штук, партиями по 50.', width: 'full' },
          ],
        },
        {
          key: 'parties',
          label: 'Стороны',
          columns: 2,
          fields: [
            { key: 'buyer', label: 'Покупатель', propertyType: 'string', value: 'ООО «Утро»', width: 'half' },
            { key: 'seller', label: 'Поставщик', propertyType: 'string', value: 'ООО «Северный склад»', width: 'half' },
            { key: 'manager', label: 'Менеджер', propertyType: 'string', value: 'Ирина Котова', width: 'half' },
            { key: 'lawyer', label: 'Юрист', propertyType: 'string', value: 'Павел Ершов', width: 'half' },
          ],
        },
      ],
    },
    {
      key: 'delivery',
      label: 'Поставка',
      icon: 'local_shipping',
      groups: [
        {
          key: 'shipping',
          label: 'Доставка',
          columns: 2,
          fields: [
            { key: 'address', label: 'Адрес склада', propertyType: 'string', value: 'Москва, ул. Складочная, 3', width: 'full' },
            { key: 'first', label: 'Первая партия', propertyType: 'date', value: '2026-11-20', width: 'half' },
            { key: 'last', label: 'Последняя партия', propertyType: 'date', value: '2027-02-20', width: 'half' },
          ],
        },
      ],
    },
  ],
};

const copy = (value) => JSON.parse(JSON.stringify(value));
const empty = () => ({ schema_version: 1, sections: {}, groups: {}, fields: {} });

// Lays the stored record out through layers, the lower one first: places,
// order, names, widths and what is hidden. The component sends a layer and
// draws what the host answers, so a host that keeps layers resolves them on
// every read. A field a layer takes out of every group (group: null) lies in
// «Не размещённые».
const resolve = (base, stack) => {
  const record = copy(base);
  const layer = { sections: {}, groups: {}, fields: {} };
  for (const one of stack) {
    for (const bucket of ['sections', 'groups', 'fields']) {
      for (const [key, entry] of Object.entries(one?.[bucket] ?? {})) layer[bucket][key] = { ...(layer[bucket][key] ?? {}), ...entry };
    }
  }
  const order = (bucket) => (a, b) => (layer[bucket][a.key]?.order ?? 1e6) - (layer[bucket][b.key]?.order ?? 1e6);
  const look = (entry, names) => Object.fromEntries(names.filter((name) => name in entry).map((name) => [name, entry[name]]));
  for (const [key, entry] of Object.entries(layer.sections)) {
    if (!record.sections.some((section) => section.key === key) && entry.label) record.sections.push({ key, label: entry.label, groups: [] });
  }
  const groups = record.sections.flatMap((section) => section.groups.map((group) => ({ group, section: section.key })));
  for (const [key, entry] of Object.entries(layer.groups)) {
    if (!groups.some((one) => one.group.key === key) && entry.label) groups.push({ group: { key, label: entry.label, columns: entry.columns ?? 1, fields: [] }, section: entry.section });
  }
  const fields = groups.flatMap(({ group }) => group.fields.map((field) => ({ field, group: group.key })));
  for (const section of record.sections) {
    Object.assign(section, look(layer.sections[section.key] ?? {}, ['label', 'icon', 'hidden']));
    section.groups = [];
  }
  for (const one of groups) {
    one.group.fields = [];
    Object.assign(one.group, look(layer.groups[one.group.key] ?? {}, ['label', 'hidden', 'columns']));
    const home = layer.groups[one.group.key]?.section ?? one.section;
    (record.sections.find((section) => section.key === home) ?? record.sections[0]).groups.push(one.group);
  }
  record.unplaced = [];
  for (const one of fields) {
    const entry = layer.fields[one.field.key] ?? {};
    Object.assign(one.field, look(entry, ['width', 'label', 'hint', 'variant', 'hidden']));
    const home = 'group' in entry ? entry.group : one.group;
    if (home === null) record.unplaced.push(one.field);
    else groups.find(({ group }) => group.key === home)?.group.fields.push(one.field);
  }
  record.sections.sort(order('sections'));
  for (const section of record.sections) {
    section.groups.sort(order('groups'));
    for (const group of section.groups) group.fields.sort(order('fields'));
  }
  record.unplaced.sort(order('fields'));
  return record;
};

// The shared layer is the department's: it hides the lawyer for everyone.
const layers = {
  shared: { revision: 3, view: { ...empty(), fields: { lawyer: { hidden: true } } } },
  personal: { revision: 1, view: empty() },
};

const answer = () => {
  const record = resolve(base, [layers.shared.view, layers.personal.view]);
  record.view = {
    layers: copy(layers),
    editable: ['personal'],
    denied: { shared: 'Общий вид меняет администратор раздела.' },
  };
  return { answer: 'applied', record };
};

const initializeContractLayout = async () => {
  await customElements.whenDefined('sf-view-properties');
  const panel = document.querySelector('#contract-layout-property-view');
  if (!panel || panel.dataset.exampleReady === 'true') return;
  panel.dataset.exampleReady = 'true';

  panel.setHostPort({
    version: '1.7.0',
    capabilities: ['view-settings'],
    async raise(intent, payload) {
      if (intent.startsWith('view.')) docara.example.log(intent, payload);
      if (intent === 'record.load') return answer();
      if (intent === 'view.save') {
        const kind = payload?.target?.kind;
        const stored = layers[kind];
        if (kind !== 'personal') return { answer: 'refused', message: 'Общий вид меняет администратор раздела.' };
        // A write against an old revision is a conflict: someone else changed
        // the layer. The component reads the card again and says so.
        if (payload.target.revision !== stored.revision) return { answer: 'conflict', revision: stored.revision, view: copy(stored.view) };
        stored.view = copy(payload.view);
        stored.revision += 1;
        return { answer: 'applied', revision: stored.revision };
      }
      if (intent === 'view.reset') {
        layers.personal = { revision: layers.personal.revision + 1, view: empty() };
        return { answer: 'applied', revision: layers.personal.revision };
      }
      return { answer: 'unavailable', reason: 'unknown-intent' };
    },
  });
};

initializeContractLayout();
