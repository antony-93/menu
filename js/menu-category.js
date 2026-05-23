import { createMenuItem } from "./menu-item";

const createMenuCategoryTitle = (name) => {
  const headingEl = document.createElement("h3");

  headingEl.classList.add("menu-category");
  headingEl.textContent = name;
  
  return headingEl;
};

const createMenuItemsList = (items) => {
  const listEl = document.createElement("ul");

  for (const item of items) {
    const listItemEl = document.createElement("li");

    listItemEl.appendChild(createMenuItem(item));

    listEl.appendChild(listItemEl);
  }

  return listEl;
};

export const createMenuCategory = (category) => {
  const menuCategoryEl = document.createDocumentFragment();

  menuCategoryEl.append(
    createMenuCategoryTitle(category.name),
    createMenuItemsList(category.items),
  );

  return menuCategoryEl;
};
