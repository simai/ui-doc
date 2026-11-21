// The settings only keep the values; the page applies them: the theme as a
// class on its area, the colour as a theme built from it (SF.ThemePalette,
// loaded by data-sf-theme-palette on the area).

const page = document.querySelector('#settings-theme-page');
const state = document.querySelector('#settings-theme-state');
const themeNames = {system: 'как в системе', light: 'светлая', dark: 'тёмная'};
let removeTheme = null;

const applyTheme = (value) => {
  page.classList.toggle('theme-light', value === 'light');
  page.classList.toggle('theme-dark', value === 'dark');
};

// A palette hue comes by its name (blue), an own colour as a code (#00838f).
const applyColor = (value) => {
  const palette = window.SF?.ThemePalette;
  if (!palette) return;
  const hex = value.startsWith('#') ? value : palette.staticPalette()[value]?.tones?.[50];
  if (!hex) return;
  removeTheme?.();
  removeTheme = palette.applyTheme(palette.themeFromColor(hex), page);
};

const showState = (values) => {
  state.textContent = `Тема: ${themeNames[values.theme]}, цвет: ${values.color}`;
};

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const settings = document.querySelector('#settings-theme-menu');
  const whenPalette = (run) => (window.SF?.ThemePalette ? run() : window.addEventListener('theme-palette:ready', run, {once: true}));

  settings.addEventListener('sf-settings-changed', (event) => {
    const {id, value} = event.detail ?? {};
    if (id === 'theme') applyTheme(value);
    if (id === 'color') applyColor(value);
    showState(settings.values);
  });
  whenPalette(() => applyColor(settings.values.color));
  showState(settings.values);
};

initialize();
