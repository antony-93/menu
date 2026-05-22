import { createMenuSection } from "./menu-section";

export const renderMenu = (menu) => {
  const menuSectionsEl = document.createDocumentFragment();

  for (const section of menu) {
    menuSectionsEl.appendChild(createMenuSection(section));
  }

  document.getElementById("menu").replaceChildren(menuSectionsEl);
};
