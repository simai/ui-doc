// The type icon comes from icon, then kind, then the name's extension, then folder or file.
customElements.whenDefined('sf-tree').then(() => {
  document.querySelectorAll('[data-tree-icons]').forEach((tree) => {
    tree.items = [
      {label: 'Документы', open: true, children: [
        {label: 'Договор.pdf'},
        {label: 'Смета.xlsx'},
        {label: 'Главная', kind: 'page'},
      ]},
      {label: 'Медиа', open: true, children: [
        {label: 'Обложка.png'},
        {label: 'Ролик.mp4'},
      ]},
      {label: 'Шаблоны', kind: 'folder'},
      {label: 'settings.json'},
    ];
  });
});
