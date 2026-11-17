// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and takes ISO 8601 date-times as they come back.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "promo-5",
  "collection": "shop.orders",
  "revision": 1,
  "label": "Чёрная пятница",
  "actions": [
    "record.edit"
  ],
  "sections": [
    {
      "key": "main",
      "label": "Общее",
      "groups": [
        {
          "key": "main",
          "label": "Сроки акции",
          "columns": 2,
          "fields": [
            {
              "key": "starts",
              "label": "Начало",
              "propertyType": "datetime",
              "width": "half",
              "value": "2026-11-27T09:00:00+03:00"
            },
            {
              "key": "ends",
              "label": "Окончание",
              "propertyType": "datetime",
              "width": "half",
              "value": "2026-11-30T23:59:00+03:00"
            }
          ]
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-datetime');
  if (!view || view.dataset.exampleReady === 'true') return;
  view.dataset.exampleReady = 'true';
  const take = (values = {}) => {
    for (const section of record.sections) for (const group of section.groups) for (const field of group.fields) {
      if (field.key in values) field.value = values[field.key];
    }
    record.revision += 1;
    return {answer: 'applied', record: copy(record)};
  };
  view.setHostPort({
    version: '1.14.0',
    capabilities: [],
    async raise(intent, payload) {
      if (intent === 'record.load') return {answer: 'applied', record: copy(record)};
      if (intent === 'group.save' || intent === 'record.save') return take(payload?.values);
      return {answer: 'unavailable', reason: 'unknown-intent'};
    },
  });
};

initialize();
