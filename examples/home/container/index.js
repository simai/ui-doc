// Says how wide the panel is and how its card is laid out now: the layout
// comes from cq-* classes reacting to the container, not to the window.
//
// The example serves the Russian and the English home page: its words follow
// the page language. The sandbox receives the page's lang after this script
// has run, so the words are applied again whenever lang changes.
const panel = document.querySelector('[data-cq-panel]');
const card = document.querySelector('[data-cq-card]');
const readout = document.querySelector('[data-cq-readout]');

const WORDS = {
  ru: {grid: 'три колонки (cq-md)', row: 'в строку (cq-sm)', column: 'столбиком',
    line: (width, layout) => `Панель ${width} px — карточка ${layout}. Потяните правый край панели или нажмите на нём стрелки.`},
  en: {grid: 'three columns (cq-md)', row: 'one row (cq-sm)', column: 'a column',
    line: (width, layout) => `Panel ${width} px: the card is ${layout}. Drag the panel's right edge or press the arrow keys on it.`},
};
const russian = new Map();
let words = WORDS.ru;

function applyLanguage() {
  const english = (document.documentElement.lang || '').startsWith('en');
  words = english ? WORDS.en : WORDS.ru;
  for (const node of document.querySelectorAll('[data-en]')) {
    if (!russian.has(node)) russian.set(node, node.textContent);
    node.textContent = english ? node.dataset.en : russian.get(node);
  }
  for (const node of document.querySelectorAll('[data-en-label]')) {
    if (!russian.has(node)) russian.set(node, node.getAttribute('label'));
    node.setAttribute('label', english ? node.dataset.enLabel : russian.get(node));
  }
  report();
}

function report() {
  const style = getComputedStyle(card);
  const layout = style.display === 'grid' ? words.grid : style.flexDirection === 'row' ? words.row : words.column;
  readout.textContent = words.line(Math.round(panel.getBoundingClientRect().width), layout);
}

new MutationObserver(applyLanguage).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
new ResizeObserver(report).observe(panel);
applyLanguage();
