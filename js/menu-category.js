import { createMenuItem } from "./menu-item";

const createMenuCategoryTitle = (name) => {
    const el = document.createElement('h3');
    el.classList.add('menu-category');
    el.textContent = name;
    return el;
}

const createMenuCategoryItemsList = (items) => {
    const el = document.createElement('ul');
    const itemsEl = items.map((item) => {
        const itemEl = document.createElement('li');
        itemEl.appendChild(createMenuItem(item));
        return itemEl;
    });

    el.append(...itemsEl);

    return el;
}

export const createMenuCategory = (category) => {
    const el = document.createDocumentFragment();

    el.append(
        createMenuCategoryTitle(category.name),
        createMenuCategoryItemsList(category.items)
    );

    return el;
};