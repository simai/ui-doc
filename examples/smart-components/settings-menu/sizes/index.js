// The same three settings at both rungs.
const items = [{"key": "theme", "type": "choice", "label": "Тема", "icon": "contrast", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}]}, {"type": "divider"}, {"key": "notify", "type": "boolean", "label": "Уведомления", "icon": "notifications", "value": true, "default": true}, {"key": "sound", "type": "boolean", "label": "Звук", "icon": "volume_up", "value": false, "default": false}];
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  for (const id of ['settings-menu-size-half', 'settings-menu-size-one']) {
    const menu = document.querySelector(`#${id}`);
    if (!menu || menu.dataset.exampleReady === 'true') continue;
    menu.dataset.exampleReady = 'true';
    menu.items = structuredClone(items);
  }
};

initialize();
