// One menu for every row: «⋯» opens it at the button, the right button
// at the pointer. SF.menu.open answers with the chosen row or null.
document.querySelectorAll('[data-context-menu-demo="page-menu"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const result = demo.querySelector('[data-menu-result]');
  const entries = [
    {id: 'open', text: 'Открыть', icon: 'open_in_new'},
    {id: 'rename', text: 'Переименовать', icon: 'edit'},
    {type: 'separator'},
    {id: 'delete', text: 'Удалить', icon: 'delete', danger: true},
  ];
  const report = (row, choice) => {
    result.textContent = choice
      ? `${row.dataset.file}: выбрано «${choice.entry?.text ?? choice.id}».`
      : `${row.dataset.file}: меню закрыто без выбора.`;
  };
  demo.querySelectorAll('[data-row-menu]').forEach((button) => {
    const row = button.closest('li');
    button.addEventListener('click', async () => {
      const choice = await globalThis.SF?.menu?.open({anchor: button, entries, label: `Действия с файлом ${row.dataset.file}`, returnTo: row});
      report(row, choice);
    });
  });
  demo.querySelectorAll('li').forEach((row) => {
    row.addEventListener('contextmenu', async (event) => {
      event.preventDefault();
      const choice = await globalThis.SF?.menu?.open({x: event.clientX, y: event.clientY, entries, label: `Действия с файлом ${row.dataset.file}`, returnTo: row});
      report(row, choice);
    });
  });
});
