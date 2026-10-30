// Tiles on top: a press toggles a boolean and cycles a short choice.
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  const menu = document.querySelector('#settings-menu-tiles');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.items = [
    {"key": "theme", "type": "choice", "label": "Тема", "icon": "contrast", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}], "tile": true},
    {"key": "density", "type": "choice", "label": "Плотность", "icon": "density_medium", "value": "normal", "default": "normal", "options": [{"value": "compact", "label": "Плотно"}, {"value": "normal", "label": "Обычно"}, {"value": "loose", "label": "Свободно"}], "tile": true},
    {"key": "sound", "type": "boolean", "label": "Звук", "icon": "volume_up", "value": false, "default": false, "tile": true},
    {"type": "divider"},
    {"key": "size", "type": "range", "label": "Размер текста", "min": 85, "max": 125, "step": 5, "value": 100, "default": 100, "unit": "%"},
    {"key": "notify", "type": "boolean", "label": "Уведомления", "value": true, "default": true},
    {"key": "lang", "type": "choice", "label": "Язык", "icon": "translate", "value": "ru", "options": [{"value": "ru", "label": "Русский"}, {"value": "en", "label": "English"}, {"value": "kk", "label": "Қазақша"}]}
  ];
  const status = document.querySelector('#settings-menu-tiles-status');
  menu.addEventListener('sf-settings-menu-changed', ({detail}) => {
    if (status) status.textContent = `Изменено: ${detail.key} = ${detail.value}.`;
  });
};

initialize();
