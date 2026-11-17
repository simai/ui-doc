// One menu, four buttons: each opens it on its own side with toggleFor().
document.querySelectorAll('[data-context-menu-demo="open-side"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const menu = demo.querySelector('sf-menu-context');
  menu.entries = [
    {id: 'open', text: 'Открыть заказ', icon: 'open_in_new'},
    {id: 'print', text: 'Печать', icon: 'print', shortcut: 'Ctrl+P'},
    {type: 'separator'},
    {id: 'cancel', text: 'Отменить заказ', icon: 'block', danger: true},
  ];
  demo.querySelectorAll('[data-side]').forEach((anchor) => {
    anchor.addEventListener('click', () => menu.toggleFor({anchor, options: {side: anchor.dataset.side}}));
  });
});
