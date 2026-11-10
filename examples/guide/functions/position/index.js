const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.Position.anchor keeps a project's own panel at its button.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const button = document.getElementById('position-toggle');
  const panel = document.getElementById('position-panel');
  let anchored = null;
  const open = (side) => {
    anchored?.stop();
    panel.hidden = false;
    anchored = SF.Position.anchor(button, panel, {side, onPosition: ({side: placed, placement}) => log('onPosition', {asked: side, side: placed, placement})});
  };
  const close = () => {
    anchored?.stop();
    anchored = null;
    panel.hidden = true;
  };
  button.addEventListener('click', () => (anchored ? close() : open('block-end')));
  document.getElementById('position-top').addEventListener('click', () => open('block-start'));
};

start();
