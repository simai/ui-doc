// A tab's content is made the first time the tab opens, so the page loads
// only the admin until the reader asks for more.
const capabilities = 'assistant feedback proposals conversation-create conversation-manage interlocutors';
const open = {
  admin(panel) {
    const frame = panel.querySelector('iframe');
    if (!frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.src);
  },
  async chat(panel) {
    panel.innerHTML = `<sf-chat-window id="showcase-chat" capabilities="${capabilities}" embedded></sf-chat-window>`;
    await import('./chat.js');
  },
  async editor(panel) {
    panel.innerHTML = '<div class="showcase__frame showcase__frame--scroll"><sf-content-editor id="showcase-editor"></sf-content-editor></div>';
    await import('./editor.js');
  },
};
const opened = new Set();
const show = (index) => {
  const panel = document.querySelector(`[data-panel-index="${index}"]`);
  if (!panel || opened.has(panel)) return;
  opened.add(panel);
  open[panel.dataset.panel](panel);
};
document.querySelector('[data-showcase]').addEventListener('sf-tabs-change', (event) => show(event.detail.current));
show(0);
