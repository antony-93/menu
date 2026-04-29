import { createMenuCategory } from "./menu-category";
import { registerSectionElement } from "./store/active-menu-section";
import { slugify } from "./utils/slugify";

const createMenuSectionCategoriesList = (categories) => {
    const el = document.createElement('ul');
    const categoriesEl = categories.map((category) => {
        const categoryEl = document.createElement('li');
        categoryEl.appendChild(createMenuCategory(category));
        return categoryEl;
    });

    el.append(...categoriesEl);

    return el;
}

export const createMenuSection = (section) => {
    const el = document.createElement('section');

    el.id = slugify(section.name);
    el.classList.add('menu-section');
    el.dataset.id = section.id;

    el.innerHTML = `
      <h2>${section.name}</h2>
      <div className="underline"></div>
      <span className="icon">${section.icon}</span>
    `;

    el.appendChild(createMenuSectionCategoriesList(section.categories));
    registerSectionElement(el);

    return el;
};