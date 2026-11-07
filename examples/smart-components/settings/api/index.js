// setValue and setAll write values without events; show opens the popup
// down to one setting; reset puts the declared values back and sends changed
// for each one that moved. Each answers with its outcome.
// <example-helper event-log> -- written from examples/shared/event-log.js by scripts/sync-example-helpers.mjs; edit it there
// Event log for live examples: a panel under the example lists the events its
// components fire, newest first -- the event's name and a short detail -- so a
// reader sees what a press, a choice or a submit sends while it happens.
//
//   <div data-example-event-log class="..."></div>
//   const log = exampleEventLog(document.querySelector('[data-example-event-log]'));
//   log.watch(button, 'sf-button-press');            // detail as sent
//   log.watch(form, 'submit', (event) => '...');     // or a line of your own
//   log.write('click', 'Экспортировать');             // or write it yourself
//
// The panel says «Событий пока нет» until the first event; the text of
// data-example-event-log-empty replaces it. This file is the only copy:
// scripts/sync-example-helpers.mjs writes it into each example's index.js
// that asks for it, and `composer docs:check` fails when a copy differs.
const exampleEventLog = (panel, {limit = 5} = {}) => {
  const list = document.createElement('ol');
  list.className = 'flex flex-col gap-1/2 m-0 p-0 list-none mono text-1/2';
  const empty = document.createElement('li');
  empty.className = 'sans color-on-surface-variant';
  empty.textContent = panel.dataset.exampleEventLogEmpty || 'Событий пока нет';
  list.append(empty);
  panel.replaceChildren(list);
  panel.setAttribute('role', 'log');
  panel.setAttribute('aria-label', 'События примера');

  // A detail in one short line: up to four keys, long values cut.
  const value = (item) => {
    if (typeof item === 'string') return JSON.stringify(item.length > 40 ? `${item.slice(0, 39)}…` : item);
    if (item === null || typeof item !== 'object') return String(item);
    return Array.isArray(item) ? `[${item.length}]` : '{…}';
  };
  const brief = (detail) => {
    if (detail === undefined || detail === null) return '';
    if (typeof detail !== 'object') return String(detail);
    const entries = Object.entries(detail);
    const shown = entries.slice(0, 4).map(([key, item]) => `${key}: ${value(item)}`);
    if (entries.length > 4) shown.push('…');
    return shown.length ? `{${shown.join(', ')}}` : '';
  };

  const write = (name, detail) => {
    empty.remove();
    const row = document.createElement('li');
    row.className = 'flex flex-wrap col-gap-2';
    const label = document.createElement('span');
    label.className = 'color-on-surface';
    label.textContent = name;
    row.append(label);
    const text = typeof detail === 'string' ? detail : brief(detail);
    if (text) {
      const rest = document.createElement('span');
      rest.className = 'color-on-surface-variant';
      rest.textContent = text;
      row.append(rest);
    }
    list.prepend(row);
    while (list.children.length > limit) list.lastElementChild.remove();
  };

  const watch = (target, names, describe) => {
    for (const name of [names].flat()) {
      target.addEventListener(name, (event) => write(name, describe ? describe(event) : event.detail));
    }
  };

  return {write, watch};
};
// </example-helper>

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  const panel = document.querySelector('[data-example-event-log]');
  if (!panel || panel.dataset.exampleReady === 'true') return;
  panel.dataset.exampleReady = 'true';
  const log = exampleEventLog(panel);
  const brief = (event) => ({id: event.detail.id, value: event.detail.value, previous: event.detail.previous});
  for (const settings of document.querySelectorAll('sf-settings')) {
    log.watch(settings, ['sf-settings-change', 'sf-settings-changed'], brief);
    log.watch(settings, 'sf-settings-reset', () => '');
  }
  const settings = document.querySelector('#settings-api');
  const values = document.querySelector('#settings-api-values');
  const print = () => { values.textContent = JSON.stringify(settings.values); };
  settings.addEventListener('sf-settings-changed', print);
  print();
  const calls = {
    setValue: () => ['setValue("theme", "dark")', settings.setValue('theme', 'dark')],
    setAll: () => ['setAll({font: "l", sound: false})', settings.setAll({font: 'l', sound: false})],
    show: async () => ['show("lang")', await settings.show('lang')],
    reset: () => ['reset()', settings.reset()],
    missing: () => ['setValue("zoom", 2)', settings.setValue('zoom', 2)],
  };
  for (const button of document.querySelectorAll('sf-button[data-call]')) {
    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      const [name, result] = await calls[button.dataset.call]();
      log.write(name, result);
      print();
    });
  }
};

initialize();
