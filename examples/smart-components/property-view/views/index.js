// Named views, answered by a host that lives on this page.
//
// Every view is a whole arrangement with a permanent id. The host keeps the
// list and one layer per view, and answers every read with the card laid out
// through the chosen view: «Обычный» leaves out the cost and the supplier,
// «Для продаж» puts price and stock first, «Экспертный» shows every field.
// «Настроить вид» keeps the list: a new view starts from what is on screen,
// a rename keeps the id, the last shared view cannot be removed.
const base = {
  record_id: 'record-demo-grinder',
  collection: 'docs.demo_products',
  revision: 3,
  label: 'Кофемолка «Утро» КМ-200',
  sections: [
    {
      key: 'main',
      label: 'Товар',
      groups: [
        {
          key: 'about',
          label: 'Описание',
          columns: 2,
          fields: [
            { key: 'sku', label: 'Артикул', propertyType: 'string', value: 'KM-200-W', width: 'half' },
            { key: 'title', label: 'Название', propertyType: 'string', value: 'Кофемолка «Утро» КМ-200', width: 'half' },
            { key: 'category', label: 'Категория', propertyType: 'choice', value: 'kitchen', width: 'half',
              options: [
                { value: 'kitchen', label: 'Техника для кухни' },
                { value: 'coffee', label: 'Всё для кофе' },
              ] },
            { key: 'supplier', label: 'Поставщик', propertyType: 'string', value: 'ООО «Северный склад»', width: 'half' },
          ],
        },
        {
          key: 'money',
          label: 'Цена и остаток',
          columns: 2,
          fields: [
            { key: 'price', label: 'Цена, ₽', propertyType: 'string', value: '4 990', width: 'half' },
            { key: 'cost', label: 'Себестоимость, ₽', propertyType: 'string', value: '3 120', width: 'half' },
            { key: 'stock', label: 'Остаток, шт.', propertyType: 'string', value: '38', width: 'half' },
            { key: 'reserved', label: 'В резерве, шт.', propertyType: 'string', value: '6', width: 'half' },
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

// One layer per view, in the shape the component writes.
const views = {
  default: { revision: 1, view: { ...empty(), fields: { supplier: { hidden: true }, cost: { hidden: true }, reserved: { hidden: true } } } },
  sales: { revision: 1, view: { ...empty(), groups: { money: { order: 1, label: 'Продажа' }, about: { order: 2 } }, fields: { cost: { hidden: true }, supplier: { hidden: true } } } },
  expert: { revision: 1, view: empty() },
};
const profiles = [
  { id: 'default', label: 'Обычный', shared: true },
  { id: 'sales', label: 'Для продаж', shared: true },
  { id: 'expert', label: 'Экспертный', shared: true },
];
let current = 'default';
let made = 0;

// A view's layer is the view's own: a shared view is written as the shared
// layer, a personal one as the personal layer.
const kindOf = (id) => (profiles.find((profile) => profile.id === id)?.shared ? 'shared' : 'personal');

const answer = () => {
  const record = resolve(base, [views[current].view]);
  const kind = kindOf(current);
  record.view = {
    profiles: copy(profiles),
    profile: current,
    layers: { [kind]: copy(views[current]) },
    editable: [kind],
  };
  return { answer: 'applied', record };
};

const initializeProductViews = async () => {
  await customElements.whenDefined('sf-view-properties');
  const panel = document.querySelector('#product-views-property-view');
  if (!panel || panel.dataset.exampleReady === 'true') return;
  panel.dataset.exampleReady = 'true';

  panel.setHostPort({
    version: '1.7.0',
    capabilities: ['view-settings'],
    async raise(intent, payload) {
      if (intent.startsWith('view.')) docara.example.log(intent, payload);
      if (intent === 'record.load') return answer();
      if (intent === 'view.profile') {
        if (!views[payload?.profile]) return { answer: 'refused', reason: 'unknown-view' };
        current = payload.profile;
        return answer();
      }
      if (intent === 'view.save') {
        const stored = views[current];
        if (payload?.target?.revision !== stored.revision) return { answer: 'conflict', revision: stored.revision, view: copy(stored.view) };
        stored.view = copy(payload.view);
        stored.revision += 1;
        return { answer: 'applied', revision: stored.revision };
      }
      if (intent === 'view.reset') {
        views[current] = { revision: views[current].revision + 1, view: empty() };
        return { answer: 'applied', revision: views[current].revision };
      }
      if (intent === 'view.create') {
        // The id is the host's, which is what lets a rename keep it.
        made += 1;
        const id = `mine-${made}`;
        profiles.push({ id, label: String(payload?.label ?? ''), shared: Boolean(payload?.shared) });
        views[id] = { revision: 1, view: copy(payload?.view ?? views[current].view) };
        current = id;
        return answer();
      }
      if (intent === 'view.rename') {
        const found = profiles.find((profile) => profile.id === payload?.profile);
        if (!found) return { answer: 'refused', reason: 'unknown-view' };
        found.label = String(payload.label ?? found.label);
        return answer();
      }
      if (intent === 'view.delete') {
        const found = profiles.find((profile) => profile.id === payload?.profile);
        if (!found) return { answer: 'refused', reason: 'unknown-view' };
        if (found.shared && profiles.filter((profile) => profile.shared).length < 2) return { answer: 'refused', reason: 'last-shared-view' };
        profiles.splice(profiles.indexOf(found), 1);
        delete views[found.id];
        if (current === found.id) current = profiles[0].id;
        return answer();
      }
      return { answer: 'unavailable', reason: 'unknown-intent' };
    },
  });
};

initializeProductViews();
