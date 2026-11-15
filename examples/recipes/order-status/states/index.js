(async () => {
  await customElements.whenDefined('sf-list-timeline');
  document.querySelector('#history-empty').items = [];
  const sergey = {name: 'Сергей Иванов', hue: 'indigo'};
  document.querySelector('#history-many').items = [1, 2, 3, 4, 5, 6].map((i) => ({
    id: 'e' + i, icon: 'edit', actor: sergey, time: `2026-11-12T11:0${i}:00+03:00`, title: 'изменил вес',
    change: {label: 'Вес', before: `${4 + i / 10} кг`.replace('.', ','), after: `${4.1 + i / 10} кг`.replace('.', ',')},
  }));
})();
