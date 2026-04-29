import { createSearchMenuItemInput } from "./search-menu-item-input";
import { createMenuSectionNav } from "./menu-section-nav";
import { setMenuActionsHeight, subscribe } from "./store/menu-actions-height";

const syncMenuActionsHeightCSSVariable = () => {
    subscribe((height) => {
        document.documentElement.style.setProperty(
            "--actions-height",
            `${height}px`,
        );
    })
};

const setResizeObserver = (el) => {
    syncMenuActionsHeightCSSVariable();
    setMenuActionsHeight(el.offsetHeight);
    const observer = new ResizeObserver((el) => setMenuActionsHeight(el.offsetHeight));
    observer.observe(el);
}

export const renderMenuActions = () => {
    const el = document.getElementById('menu-actions');
    const searchMenuItemInput = createSearchMenuItemInput();
    const menuSectionNav = createMenuSectionNav();

    el.append(searchMenuItemInput, menuSectionNav);
    setResizeObserver(el);
}