customElements.whenDefined('sf-tree').then(() => {
  document.querySelectorAll('[data-tree-static]').forEach((tree) => {
    tree.items = [
      {label: 'content', children: [
        {label: 'ru', children: [{label: 'index.md'}, {label: 'guide', kind: 'folder'}]},
      ]},
      {label: 'examples', kind: 'folder'},
      {label: 'docara.json'},
      {label: 'composer.json'},
    ];
  });
});
