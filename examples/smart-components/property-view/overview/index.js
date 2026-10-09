// One record, answered by a host that lives on this page.
//
// sf-property-view owns no data: it raises an intent and draws whatever the
// host answers. The example is that host, so the panel here behaves exactly as
// it does against a real one -- including a save that comes back as a new
// revision.
const record = {
  answer: 'applied',
  record: {
    record_id: 'record-demo-solution',
    collection: 'docs.demo_solutions',
    revision: 4,
    label: 'SIMAI: Платежи №178',
    sections: [
      {
        key: 'main',
        label: 'Общее',
        rare: false,
        hidden: false,
        groups: [
          {
            key: 'main',
            label: 'Основное',
            columns: 2,
            fields: [
              { key: 'code', label: 'Код решения', propertyType: 'string', value: 'simai.payments', width: 'half', required: true },
              { key: 'title', label: 'Название', propertyType: 'string', value: 'SIMAI: Платежи №178', width: 'half', required: true },
              { key: 'section', label: 'Раздел', propertyType: 'record', width: 'half',
                value: { value: 'record-demo-section', label: 'Платежи и биллинг', href: '/ru/smart-components/content/table/' } },
              { key: 'version', label: 'Версия', propertyType: 'string', value: '2.4.1', width: 'half' },
              { key: 'summary', label: 'Описание', propertyType: 'text', width: 'full',
                value: 'Приём платежей, возвраты и сверка с банком.' },
            ],
          },
          {
            key: 'state',
            label: 'Состояние',
            columns: 2,
            fields: [
              { key: 'status', label: 'Статус', propertyType: 'enum', width: 'half', value: 'active',
                options: [
                  { value: 'active', label: 'Развивается' },
                  { value: 'frozen', label: 'Заморожено' },
                  { value: 'archived', label: 'В архиве' },
                ] },
              { key: 'released', label: 'Выпущено', propertyType: 'date', value: '2026-09-18', width: 'half' },
              { key: 'public', label: 'Доступно всем', propertyType: 'boolean', value: true, width: 'half' },
              { key: 'owner', label: 'Ответственный', propertyType: 'string', value: 'Отдел интеграций', width: 'half' },
            ],
          },
        ],
      },
    ],
  },
};

const copy = (value) => JSON.parse(JSON.stringify(value));

const initializeSolutionPropertyView = async () => {
  await customElements.whenDefined('sf-property-view');

  const panel = document.querySelector('#solution-property-view');
  if (!panel || panel.dataset.exampleReady === 'true') return;
  panel.dataset.exampleReady = 'true';

  // What this host can do is declared, not assumed: the panel only offers the
  // controls whose capability the host claims.
  panel.setHostPort({
    version: '1.7.0',
    capabilities: [],
    async raise(intent, payload) {
      if (intent === 'record.load') return copy(record);
      if (intent === 'group.save') {
        // A real host validates and returns the record it stored. This one
        // takes the values as given and answers with the next revision, which
        // is what makes the panel leave editing.
        // The intent names the section and the group it was raised from, and
        // carries only the fields that changed -- not the whole record.
        const group = record.record.sections
          .find((section) => section.key === payload?.section)?.groups
          .find((item) => item.key === payload?.group);
        for (const field of group?.fields ?? []) {
          if (payload?.values && field.key in payload.values) field.value = payload.values[field.key];
        }
        record.record.revision += 1;
        return copy(record);
      }
      return { answer: 'unavailable', reason: 'unknown-intent' };
    },
  });
};

initializeSolutionPropertyView();
