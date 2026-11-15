// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and asks to confirm a save that touches other records.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "product-17",
  "collection": "shop.products",
  "revision": 1,
  "label": "Чайник «Север»",
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
          "label": "Товар",
          "columns": 2,
          "fields": [
            {
              "key": "title",
              "label": "Название",
              "propertyType": "string",
              "width": "half",
              "value": "Чайник «Север»"
            },
            {
              "key": "type",
              "label": "Тип товара",
              "propertyType": "choice",
              "width": "half",
              "value": "kettle",
              "options": [
                {
                  "value": "kettle",
                  "label": "Чайники"
                },
                {
                  "value": "pan",
                  "label": "Кастрюли"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-confirm');
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
      if (intent === 'group.save' && payload?.confirm !== 'type-digest-1') {
        return {answer: 'refused', reason: 'confirm_required', confirm: {summary: 'Тип товара сменится и у 12 вариантов этого товара', digest: 'type-digest-1'}};
      }
      if (intent === 'group.save' || intent === 'record.save') return take(payload?.values);
      return {answer: 'unavailable', reason: 'unknown-intent'};
    },
  });
};

initialize();
