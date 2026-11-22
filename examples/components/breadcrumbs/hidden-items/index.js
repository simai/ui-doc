const result = document.querySelector('#breadcrumbs-hidden');

// The ellipsis tells which levels it hides; the path then opens.
document.querySelector('.sf-breadcrumbs').addEventListener('sf-breadcrumb-click', (event) => {
  const hidden = event.detail.item.hiddenItems.map((item) => item.textContent.trim());
  result.textContent = `Скрытые уровни: ${hidden.join(', ')}`;
});
