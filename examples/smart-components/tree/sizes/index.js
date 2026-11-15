customElements.whenDefined('sf-tree').then(() => {
  document.querySelectorAll('[data-tree-sizes]').forEach((tree) => {
    tree.items = [
      {label: 'Каталог', open: true, children: [
        {label: 'Чай', open: true, children: [{label: 'Зелёный', kind: 'page'}, {label: 'Красный', kind: 'page'}]},
        {label: 'Посуда', kind: 'page'},
      ]},
      {label: 'Доставка', kind: 'page'},
    ];
  });
});
