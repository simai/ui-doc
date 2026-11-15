// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and takes the values as they are.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "customer-8",
  "collection": "shop.orders",
  "revision": 1,
  "label": "ООО «Посуда у дома»",
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
          "label": "Покупатель",
          "columns": 2,
          "fields": [
            {
              "key": "type",
              "label": "Как покупает",
              "propertyType": "choice",
              "width": "half",
              "value": "contract",
              "options": [
                {
                  "value": "retail",
                  "label": "Розница"
                },
                {
                  "value": "contract",
                  "label": "По договору"
                }
              ]
            },
            {
              "key": "contract",
              "label": "Номер договора",
              "propertyType": "string",
              "width": "half",
              "value": "Д-118",
              "when": {
                "visible": {
                  "field": "type",
                  "op": "eq",
                  "value": "contract"
                },
                "required": {
                  "field": "type",
                  "op": "eq",
                  "value": "contract"
                }
              }
            },
            {
              "key": "valid_until",
              "label": "Договор действует до",
              "propertyType": "date",
              "width": "half",
              "value": "2027-03-31",
              "when": {
                "visible": {
                  "field": "type",
                  "op": "eq",
                  "value": "contract"
                }
              }
            },
            {
              "key": "discount",
              "label": "Скидка, %",
              "propertyType": "number",
              "width": "half",
              "value": 5,
              "when": {
                "enabled": {
                  "field": "type",
                  "op": "eq",
                  "value": "contract"
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-when');
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
