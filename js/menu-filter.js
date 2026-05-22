import { menu } from "./const/menu";
import { renderMenu } from "./menu";
import { debounce } from "./utils/debounce";

const filterMenuItemsByText = (text) => {
  return menu
    .map((section) => ({
      ...section,
      categories: section.categories
        ?.map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              item.name.toLowerCase().includes(text) ||
              item.description?.toLowerCase().includes(text),
          ),
        }))
        .filter((category) => category.items.length > 0),
    }))
    .filter((section) => section.categories && section.categories.length > 0);
};

const onSearchMenuItems = (event) => {
  const text = event.target?.value.toLowerCase();
  const menu = filterMenuItemsByText(text);

  renderMenu(menu);
};

document
  .getElementById("search-menu-items")
  .addEventListener("input", debounce(onSearchMenuItems));
