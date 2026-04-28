import { pomarMenuSections } from "./const/menu";
import { setActiveSection, subscribe } from "./store/active-menu-section";
import { slugify } from "./utils/slugify";

const naoseionomeainda = (linksEl) => {
  subscribe((activeSection) => {
  });
}

const createSectionLink = (section) => {
  const el = document.createElement('a');

  el.href = `#${slugify(section.name)}`;
  el.textContent = `${section.icon} ${section.name}`;
  el.addEventListener('click', () => setActiveSection(section.id));

  return el;
}

const createSectionsLinksList = () => {
  const el = document.createElement('ul');
  const linksEl = pomarMenuSections.map((section) => {
    const linkEl = document.createElement('li');

    linkEl.appendChild(createSectionLink(section));

    return linkEl;
  });

  el.append(...linksEl);

  return el;
}

export const createMenuSectionNav = () => {
  const el = document.createElement('nav');

  el.classList.add('menu-section-navigation');
  el.appendChild(createSectionsLinksList());

  return el;
}