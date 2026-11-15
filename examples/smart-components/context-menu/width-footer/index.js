// The site menu is exactly as wide as its button; the filter has a footer.
document.querySelectorAll('[data-context-menu-demo="width-footer"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const site = demo.querySelector('[data-menu="site"]');
  site.entries = [
    {id: 'shop', text: 'Интернет-магазин', caption: 'shop.example', current: true},
    {id: 'blog', text: 'Блог компании с длинным названием раздела', caption: 'blog.example'},
    {id: 'all', text: 'Все сайты', icon: 'apps'},
  ];
  demo.querySelectorAll('[data-menu-anchor]').forEach((anchor) => {
    const menu = demo.querySelector(`[data-menu="${anchor.dataset.menuAnchor}"]`);
    anchor.addEventListener('click', () => menu.toggleFor({anchor}));
    menu.querySelectorAll('[data-menu-close]').forEach((button) => button.addEventListener('click', () => menu.close()));
  });
});
