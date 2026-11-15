// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and takes the values as they are.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "settings",
  "collection": "shop.orders",
  "revision": 1,
  "label": "Настройки магазина",
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
          "label": "Оформление заказа",
          "columns": 2,
          "fields": [
            {
              "key": "min_total",
              "label": "Минимальная сумма заказа, ₽",
              "propertyType": "number",
              "width": "half",
              "value": 500,
              "hint": "Корзину на меньшую сумму покупатель не сможет оформить."
            },
            {
              "key": "reserve",
              "label": "Резерв товара, часов",
              "propertyType": "number",
              "width": "half",
              "value": 24,
              "hint": "Сколько товар ждёт оплаты, прежде чем снова поступит в продажу."
            }
          ]
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-hints');
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
