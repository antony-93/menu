import { createMenuCategory } from "./menu-category";
import { slugify } from "./utils/slugify";

const createMenuCategoriesList = (categories) => {
  const listEl = document.createElement("ul");

  for (const category of categories) {
    const listItemEl = document.createElement("li");

    listItemEl.appendChild(createMenuCategory(category));

    listEl.appendChild(listItemEl);
  }

  return listEl;
};

export const createMenuSection = (section) => {
  const sectionEl = document.createElement("section");

  sectionEl.id = slugify(section.name);
  sectionEl.classList.add("menu-section");
  sectionEl.dataset.id = section.id;
  sectionEl.innerHTML = `
    <h2>${section.name}</h2>
    <div class="underline"></div>
    <span class="icon">${section.icon}</span>
  `;

  sectionEl.appendChild(createMenuCategoriesList(section.categories));

  return sectionEl;
};
