customElements.whenDefined('sf-tree').then(() => {
  document.querySelectorAll('[data-tree-files-demo]').forEach((tree) => {
    tree.items = [
      {
        label: 'Документы',
        open: true,
        children: [
          {label: 'Договор.pdf', type: 'file'},
          {label: 'Смета.xlsx', type: 'file'},
        ],
      },
      {label: 'Изображения', children: [{label: 'Обложка.png', type: 'file'}]},
      {label: 'README.md', type: 'file'},
    ];
  });
});
