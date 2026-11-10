const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
const SIDES = {'block-end': 'снизу', 'block-start': 'сверху — снизу не поместилась', 'inline-start': 'слева', 'inline-end': 'справа'};

// The panel is anchored once; SF.Position keeps it at the button while the
// frame scrolls or resizes, flips it at the bottom edge and shifts it inside.
const start = async () => {
  const SF = await sfReady();
  const anchor = document.getElementById('position-anchor');
  const panel = document.getElementById('position-panel');
  const scroller = anchor.closest('.position-scroller');
  scroller.scrollTop = scroller.scrollHeight;
  SF.Position.anchor(anchor, panel, {
    side: 'block-end',
    onPosition: ({side}) => { panel.querySelector('[data-side]').textContent = SIDES[side] ?? side; },
  });
};

start();
