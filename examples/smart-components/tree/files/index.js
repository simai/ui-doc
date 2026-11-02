customElements.whenDefined('sf-tree').then(() => {
  document.querySelectorAll('[data-tree-files-demo]').forEach((tree) => {
    tree.items = [
      {
        label: 'Документы',
        open: true,
        children: [
          {label: 'Договор.pdf', kind: 'file'},
          {label: 'Смета.xlsx', kind: 'file'},
        ],
      },
      {label: 'Изображения', children: [{label: 'Обложка.png', kind: 'file'}]},
      {label: 'README.md', kind: 'file'},
    ];
  });
});
