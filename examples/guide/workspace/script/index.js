const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  const element = document.querySelector('#workspace-script');
  const workspace = SF.workspace(element);
  const state = document.querySelector('#workspace-state');
  const show = () => {
    state.textContent = `view: ${workspace.view}, panelOpen: ${workspace.panelOpen}, layout: ${workspace.layout}`;
  };

  document.querySelector('#workspace-list').addEventListener('click', () => workspace.show('list'));
  document.querySelector('#workspace-main').addEventListener('click', () => workspace.show('main'));
  document.querySelector('#workspace-panel').addEventListener('click', () => workspace.panel());

  // The events come however the state changed: a call, an attribute, «Назад».
  element.addEventListener('sf-workspace-view', show);
  element.addEventListener('sf-workspace-panel', show);
  show();
};

start();
