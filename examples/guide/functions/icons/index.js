const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// The icon choice built from SF.icons.choices: every option of kind icon.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const dropdown = document.getElementById('icons-choice');
  dropdown.append(...SF.icons.choices.map((name) => SF.create('list-item', {value: name, kind: 'icon', icon: name, text: name})));
  dropdown.addEventListener('change', (event) => log('change', {value: event.detail?.value ?? dropdown.value}));
  log('SF.icons.choices', {length: SF.icons.choices.length, frozen: Object.isFrozen(SF.icons.choices)});
};

start();
