import { createMenuSection } from "./menu-section";
import { getMenu } from "./store/menu";
import { getRegisteredSectionsElements, unregisterSectionElement } from "./store/active-menu-section";

export const renderMenu = () => {
    const registeredSectionsEl = getRegisteredSectionsElements();

    registeredSectionsEl.forEach(sectionEl =>
        unregisterSectionElement(sectionEl)
    );

    const el = document.getElementById('menu');
    const menu = getMenu();
    const sectionsEl = menu.map(createMenuSection);

    el.innerHTML = '';
    el.append(...sectionsEl);
}