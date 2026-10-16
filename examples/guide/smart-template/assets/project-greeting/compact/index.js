export default function ({ html, nothing, context }) {
  return html`<p class="project-greeting-compact p-2 bg-primary-container radius-2" style=${context.rootStyle || nothing}>Здравствуйте, <strong>${context.name}</strong>!</p>`;
}
