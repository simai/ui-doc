// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and pages through a long reference list for field.options.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "store-3",
  "collection": "shop.orders",
  "revision": 1,
  "label": "Склад «Восток»",
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
          "label": "Склад",
          "columns": 2,
          "fields": [
            {
              "key": "kind",
              "label": "Тип склада",
              "propertyType": "lookup",
              "width": "half",
              "value": {
                "value": "own",
                "label": "Свой"
              },
              "options": [
                {
                  "value": "own",
                  "label": "Свой"
                },
                {
                  "value": "partner",
                  "label": "Партнёрский"
                },
                {
                  "value": "pickup",
                  "label": "Пункт выдачи"
                }
              ]
            },
            {
              "key": "region",
              "label": "Регион",
              "propertyType": "lookup",
              "width": "half",
              "value": {
                "value": "r3",
                "label": "Татарстан"
              },
              "source": "regions"
            },
            {
              "key": "tags",
              "label": "Что хранит",
              "propertyType": "lookup",
              "width": "full",
              "value": [
                {
                  "value": "kitchen",
                  "label": "Кухня"
                },
                {
                  "value": "garden",
                  "label": "Сад"
                }
              ],
              "multiple": true,
              "options": [
                {
                  "value": "kitchen",
                  "label": "Кухня"
                },
                {
                  "value": "garden",
                  "label": "Сад"
                },
                {
                  "value": "textile",
                  "label": "Текстиль"
                },
                {
                  "value": "tools",
                  "label": "Инструменты"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
const regions = ["Москва", "Санкт-Петербург", "Татарстан", "Свердловская область", "Новосибирская область", "Краснодарский край", "Нижегородская область", "Самарская область", "Ростовская область", "Башкортостан", "Пермский край", "Воронежская область"].map((label, index) => ({value: `r${index + 1}`, label}));

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-lookup');
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
    capabilities: ["field-options"],
    async raise(intent, payload) {
      if (intent === 'record.load') return {answer: 'applied', record: copy(record)};
      if (intent === 'field.options') {
        const found = regions.filter((item) => item.label.toLowerCase().includes(String(payload?.search ?? '').toLowerCase()));
        const start = Number(payload?.cursor ?? 0);
        const items = found.slice(start, start + 5);
        const next = start + 5 < found.length ? String(start + 5) : null;
        return {answer: 'applied', options_page: {items, next_cursor: next, total: found.length}};
      }
      if (intent === 'group.save' || intent === 'record.save') return take(payload?.values);
      return {answer: 'unavailable', reason: 'unknown-intent'};
    },
  });
};

initialize();
