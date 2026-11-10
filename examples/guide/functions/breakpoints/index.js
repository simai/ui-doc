const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.breakpoints: which steps match now, followed through each step's MediaQueryList.
const draw = () => {
  const {breakpoints} = window.SF;
  const list = document.getElementById('breakpoints-list');
  const matched = {};
  list.replaceChildren(...Object.keys(breakpoints.ladder).map((name) => {
    const item = document.createElement('li');
    matched[name] = breakpoints.matches(name);
    item.className = `sf-badge sf-badge--size-1 ${matched[name] ? 'sf-badge--main sf-badge--primary' : 'sf-badge--outline sf-badge--neutral'}`;
    item.textContent = `${name} ${breakpoints.ladder[name]}`;
    return item;
  }));
  document.getElementById('breakpoints-width').textContent = `${document.documentElement.clientWidth} px`;
  return matched;
};
const start = async () => {
  const {breakpoints} = window.SF;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  log('SF.breakpoints.matches', draw());
  for (const name of Object.keys(breakpoints.ladder)) {
    breakpoints.media(name)?.addEventListener('change', () => log(`media('${name}') change`, draw()));
  }
  window.addEventListener('resize', () => draw());
};

start();
