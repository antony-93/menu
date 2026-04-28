import { createMenuSection } from "./menu-section";
import { getRegisteredSectionsElements, unregisterSectionElement } from "./store/active-menu-section";
import { getMenu } from "./store/menu";

export const renderMenu = () => {
    const el = document.getElementById('menu');
    const menu = getMenu();
    const sectionsEl = menu.map(createMenuSection);
    const registeredSectionsEl = getRegisteredSectionsElements();

    registeredSectionsEl.forEach(sectionEl =>
        unregisterSectionElement(sectionEl)
    );

    el.innerHTML = '';
    el.append(...sectionsEl);
}