export default function ({ html, context }) {
  return html`<p class="p-2 bg-primary-container radius-2">Здравствуйте, <strong>${context.name}</strong>!</p>`;
}
