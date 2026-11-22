// A pretend request answers after a second and a half; the skeleton holds
// the place of the card until then.
const api = {getAuthor: () => new Promise((resolve) => setTimeout(() => resolve({name: 'Анна Смирнова', role: 'Редактор раздела «Формы»', articles: 12}), 1500))};

const renderAuthor = (author) => {
  const card = document.createElement('div');
  card.className = 'flex gap-3 items-cross-center';
  card.innerHTML = '<sf-avatar size="1"></sf-avatar><div class="flex flex-col"><strong></strong><span class="color-on-surface-variant"></span><span class="text-1/2 color-on-surface-variant"></span></div>';
  card.querySelector('sf-avatar').setAttribute('text', author.name.split(' ').map((part) => part[0]).join(''));
  card.querySelector('strong').textContent = author.name;
  card.querySelector('span').textContent = author.role;
  card.querySelectorAll('span')[1].textContent = `Статей: ${author.articles}`;
  return card;
};

const region = document.querySelector('#skeleton-replace-author');
const placeholder = [...region.children].map((node) => node.cloneNode(true));

const load = async () => {
  region.replaceChildren(...placeholder.map((node) => node.cloneNode(true)));
  region.setAttribute('aria-busy', 'true');
  const author = await api.getAuthor();
  region.replaceChildren(renderAuthor(author));
  region.removeAttribute('aria-busy');
};

document.querySelector('#skeleton-replace-again').addEventListener('click', load);
load();
