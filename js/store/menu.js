import { pomarMenu } from "../const/menu";

let menu = pomarMenu;

export const getMenu = () => {
    return menu;
}

export const setMenu = (newMenu) => {
    menu = newMenu;
}

export const searchMenuItemsByText = (text) => {
    if (!text) return setMenu(pomarMenu);

    const searchText = text.toLowerCase();
    const filteredMenu = pomarMenu
        .map((section) => ({
            ...section,
            categories: section.categories
                ?.map((category) => ({
                    ...category,
                    items: category.items.filter(
                        (item) =>
                            item.name.toLowerCase().includes(searchText) ||
                            item.description?.toLowerCase().includes(searchText),
                    ),
                }))
                .filter((category) => category.items.length > 0),
        }))
        .filter((section) => section.categories && section.categories.length > 0);

    setMenu(filteredMenu);
}