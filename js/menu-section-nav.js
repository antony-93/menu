import { pomarMenuSections } from "./const/menu";
import { setActiveSection, subscribe } from "./store/active-menu-section";
import { slugify } from "./utils/slugify";

const syncActiveSectionClass = (linkEl, sectionId) => {
  subscribe((activeSectionId) => {
    const isActive = sectionId === activeSectionId;
    linkEl.classList.toggle('active', isActive);
    
    if (isActive) {
      linkEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  });
}

const createSectionLink = (section) => {
  const el = document.createElement('a');
  const sectionName = slugify(section.name);

  el.href = `#${sectionName}`;
  el.textContent = `${section.icon} ${section.name}`;

  const onClickSectionLink = (event) => {
    const sectionElement = document.getElementById(sectionName);

    if (!sectionElement) {
      event.preventDefault();
      return;
    }

    setActiveSection(section.id)
  }

  el.addEventListener('click', onClickSectionLink);
  syncActiveSectionClass(el, section.id);

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