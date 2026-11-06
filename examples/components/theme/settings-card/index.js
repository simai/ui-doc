// On your page the theme needs no code: Core wires every .sf-theme-button and
// the theme-switch group, sets theme-light or theme-dark on <html> and keeps
// the choice. This documentation keeps its own theme (SF_BOOT_CONFIG.theme =
// false), so here the example applies the choice to its card instead.
const root = document.querySelector('[data-solution-theme="settings"]');
const card = root?.querySelector('[data-theme-card]');
const result = root?.querySelector('[data-theme-result]');
const names = {system: 'как в системе', light: 'светлая', dark: 'тёмная'};
const systemTheme = () => (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let preference = 'system';

const show = (theme, chosen) => {
  if (result) result.textContent = `Выбрано: ${names[chosen] ?? chosen} · действует: ${names[theme]}`;
};

const applyToCard = async (chosen) => {
  preference = chosen;
  const theme = chosen === 'system' ? systemTheme() : chosen;
  card.classList.toggle('theme-dark', theme === 'dark');
  card.classList.toggle('theme-light', theme !== 'dark');
  // What Core does for the controls on a page of your own.
  root.querySelectorAll('.sf-theme-button').forEach((button) => {
    const pressed = button.dataset.theme ? button.dataset.theme === chosen : theme === 'dark';
    button.setAttribute('aria-pressed', String(pressed));
    button.classList.toggle('active', pressed);
    if (!button.dataset.theme) button.querySelector('.sf-icon').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  });
  const group = root.querySelector('sf-button-group[theme-switch]');
  if (group) group.value = chosen;
  show(theme, chosen);
};

// The documentation boot config may arrive after this script, so the check
// runs when the page has loaded and again on every click.
const docsKeepTheme = () => window.SF_BOOT_CONFIG?.theme === false;

root?.addEventListener('click', (event) => {
  if (!docsKeepTheme()) return;
  const button = event.target.closest('.sf-theme-button, sf-button-group[theme-switch] button');
  if (!button) return;
  if (button.dataset.theme) return applyToCard(button.dataset.theme);
  const group = button.closest('sf-button-group');
  if (group) {
    const index = [...group.querySelectorAll('button')].indexOf(button);
    return applyToCard(group.themeItems?.[index]?.value ?? ['system', 'light', 'dark'][index]);
  }
  return applyToCard(card.classList.contains('theme-dark') ? 'light' : 'dark');
}, true);

const start = async () => {
  if (root?.querySelector('sf-button-group')) await customElements.whenDefined('sf-button-group');
  if (docsKeepTheme()) return applyToCard(preference);
  card?.classList.remove('theme-light');
  window.addEventListener('sf-theme-change', (event) => show(event.detail.theme, event.detail.preference));
  show(document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light', window.SF?.Loader?.themePreference ?? 'system');
};

if (document.readyState === 'complete') start();
else window.addEventListener('load', start, {once: true});
