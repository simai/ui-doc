const list = document.querySelector('#switch-apply-list');
const state = document.querySelector('#switch-apply-state');
const offline = () => document.querySelector('sf-switch[name="offline"] input').checked;

// A pretend server: it saves after a pause or refuses while "offline".
const saveSetting = (name, enabled) => new Promise((resolve, reject) => {
  setTimeout(() => (offline() ? reject(new Error('offline')) : resolve({name, enabled})), 400);
});
const apply = (enabled) => list.classList.replace(enabled ? 'gap-2' : 'gap-1/3', enabled ? 'gap-1/3' : 'gap-2');

const initialize = async () => {
  await customElements.whenDefined('sf-switch');
  const compact = document.querySelector('sf-switch[name="compact"]');
  compact.addEventListener('change', async (event) => {
    const enabled = event.target.checked;
    apply(enabled);
    try {
      await saveSetting('compact', enabled);
      state.textContent = enabled ? 'Компактный режим сохранён.' : 'Обычный режим сохранён.';
    } catch {
      // Not saved: the switch and the list go back.
      compact.setChecked(!enabled);
      apply(!enabled);
      state.textContent = 'Не удалось сохранить: настройка возвращена.';
    }
  });
};

initialize();
