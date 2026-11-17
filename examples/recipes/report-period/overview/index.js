const tile = (label, value, unit = '') => `<sf-tile-metric label="${label}" value="${value}"${unit ? ` unit="${unit}"` : ''}></sf-tile-metric>`;
const PRESETS = [
  {id: 'today', label: 'Сегодня', relative: 'today'},
  {id: 'yesterday', label: 'Вчера', relative: 'yesterday'},
  {id: 'last-7-days', label: '7 дней', relative: 'last-7-days'},
  {id: 'last-30-days', label: '30 дней', relative: 'last-30-days'},
  {id: 'this-month', label: 'Этот месяц', relative: 'this-month'},
  {id: 'last-month', label: 'Прошлый месяц', relative: 'last-month'}];
Promise.all(['sf-input-date', 'sf-segmented'].map((t) => customElements.whenDefined(t))).then(() => {
  const period = document.getElementById('period');
  period.presets = PRESETS;
  const report = document.getElementById('report');
  const draw = (days) => {
    const orders = days * 31;
    report.innerHTML = tile('Заказы', orders) + tile('Выручка', orders * 4380, '₽') + tile('Средний чек', 4380, '₽');
  };
  period.addEventListener('sf-input-date-change', (event) => {
    const {start, end} = event.detail ?? {};
    const days = start && end ? Math.max(1, Math.round((new Date(end) - new Date(start)) / 864e5) + 1) : 7;
    period.removeAttribute('invalid');
    if (days > 366) {
      period.setAttribute('error-message', 'Не больше года: отчёт за два года — в разделе «Сводка».');
      period.setAttribute('invalid', '');
      return;
    }
    draw(days);
  });
  draw(7);
});
