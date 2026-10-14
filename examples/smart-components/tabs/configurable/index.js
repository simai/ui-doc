// The page plays the host: it keeps the person's arrangement and gives it back.
const initializeConfigurableTabs = async () => {
  const tabs = document.querySelector('#tabs-configurable');
  const log = document.querySelector('#tabs-configurable-log');
  if (!tabs || tabs.dataset.exampleReady === 'true') return;
  tabs.dataset.exampleReady = 'true';
  await customElements.whenDefined('sf-tabs');
  tabs.setItems([
    {key: 'overview', label: 'Обзор', icon: 'dashboard', pinned: true},
    {key: 'monitoring', label: 'Мониторинг', icon: 'monitoring'},
    {key: 'disks', label: 'Диски', icon: 'hard_drive', count: 3},
    {key: 'network', label: 'Сеть', icon: 'lan'},
    {key: 'operations', label: 'Операции', icon: 'history', count: 12},
    {key: 'access', label: 'Права доступа', icon: 'shield_person'},
    {key: 'console', label: 'Серийная консоль', icon: 'terminal'},
  ]);
  let stored = null;
  tabs.addEventListener('sf-tabs-settings-change', ({detail}) => {
    stored = {order: detail.order, hidden: detail.hidden};
    tabs.setSettings(stored);
    log.textContent = `Сохранено: порядок ${detail.order.join(', ')}; скрыто: ${detail.hidden.join(', ') || 'ничего'}`;
  });
  tabs.addEventListener('sf-tabs-settings-reset', () => {
    stored = null;
    log.textContent = 'Порядок сброшен к исходному';
  });
};
initializeConfigurableTabs();
