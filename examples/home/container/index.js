// Says how wide the panel is and how its card is laid out now: the layout
// comes from cq-* classes reacting to the container, not to the window.
const panel = document.querySelector('[data-cq-panel]');
const card = document.querySelector('[data-cq-card]');
const readout = document.querySelector('[data-cq-readout]');

const report = () => {
  const style = getComputedStyle(card);
  const layout = style.display === 'grid' ? 'три колонки (cq-md)'
    : style.flexDirection === 'row' ? 'в строку (cq-sm)' : 'столбиком';
  readout.textContent = `Панель ${Math.round(panel.getBoundingClientRect().width)} px — карточка ${layout}. Потяните правый край панели или нажмите на нём стрелки.`;
};

new ResizeObserver(report).observe(panel);
report();
