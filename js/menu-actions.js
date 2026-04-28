import { createSearchMenuItemInput } from "./search-menu-item-input";
import { createMenuSectionNav } from "./menu-section-nav";

const setResizeObserver = (el) => {
    const updateMenuActionsHeightCSSVariable = () => {
        document.documentElement.style.setProperty(
            "--actions-height",
            `${el.offsetHeight}px`,
        );
    };

    const observer = new ResizeObserver(
        updateMenuActionsHeightCSSVariable
    );

    observer.observe(el);
}

export const renderMenuActions = () => {
    const el = document.getElementById('menu-actions');
    const searchMenuItemInput = createSearchMenuItemInput();
    const menuSectionNav = createMenuSectionNav();

    el.append(searchMenuItemInput, menuSectionNav);
    setResizeObserver(el);
}