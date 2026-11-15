(async () => {
  // Работы начинаются 16 ноября в 02:00 МСК. «Прочитано» скрывает полосу на сутки,
  // но не дольше, чем до часа перед началом; с этого часа полоса стоит без «Прочитано».
  const HOUR = 3600000;
  const start = Date.parse('2026-11-16T02:00:00+03:00');
  const first = Date.parse('2026-11-14T10:00:00+03:00');
  const work = {id: 'work', level: 'info', source: 'SIMAI', time: '2026-11-13T12:00:00+03:00',
    text: '16 ноября с 02:00 до 03:00 МСК плановые работы: панель будет недоступна.'};
  await Promise.all(['sf-alert-bar', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const bar = document.querySelector('#work-bar');
  const note = document.querySelector('#work-note');
  let now = first;
  let hiddenUntil = 0;
  const render = () => {
    const soon = now >= start - HOUR;
    const visible = soon || now >= hiddenUntil;
    bar.items = visible ? [soon ? work : {...work, acknowledge: {label: 'Прочитано'}}] : [];
    note.textContent = visible
      ? (soon ? 'До начала работ меньше часа: полоса стоит до их конца.' : 'Полоса видна на всех страницах панели.')
      : 'Полоса скрыта до ' + new Date(hiddenUntil).toLocaleString('ru-RU', {day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow'}) + '.';
  };
  bar.addEventListener('sf-alert-bar-acknowledge', () => {
    hiddenUntil = Math.min(now + 24 * HOUR, start - HOUR);
    render();
  });
  document.querySelector('#work-clock').addEventListener('sf-button-group-change', (event) => {
    now = first + Number(event.detail?.value ?? 0) * HOUR;
    render();
  });
  render();
})();
