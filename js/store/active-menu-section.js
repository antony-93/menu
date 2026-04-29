import { getMenuActionsHeight, subscribe as subscribeActionsHeight } from "./menu-actions-height";

let activeMenuSectionId = null;
let isProgrammaticScroll = false;

export const setActiveSection = (sectionId) => {
    isProgrammaticScroll = true;
    activeMenuSectionId = sectionId;
    notify();
};

export const getActiveSection = () => {
    return activeMenuSectionId;
};

const listeners = [];

export const subscribe = (listener) => {
    listeners.push(listener);
};

const notify = () => {
    listeners.forEach(listener => listener(activeMenuSectionId));
};

const sectionsElements = new Set();

export const getRegisteredSectionsElements = () => {
    return Array.from(sectionsElements);
};

export const registerSectionElement = (sectionEl) => {
    sectionsElements.add(sectionEl);
};

export const unregisterSectionElement = (sectionEl) => {
    sectionsElements.delete(sectionEl);
};

const getBottommostDisplayedSectionEl = () => {
    const displayedSectionsEl = Array.from(sectionsElements);

    return displayedSectionsEl.reduce((closest, el) => {
        const elBottomPosition = el.getBoundingClientRect().bottom;
        const closestBottomPosition = closest.getBoundingClientRect().bottom;

        return elBottomPosition > closestBottomPosition ? el : closest;
    }, displayedSectionsEl[0]);
};

const getVisibleSectionEl = () => {
    const actionsHeight = getMenuActionsHeight();

    const visibleSectionsEl = Array.from(sectionsElements).filter(
        (el) => {
            const elBottomPosition =
                el.getBoundingClientRect().bottom - actionsHeight;

            return elBottomPosition >= 0;
        },
    );

    return visibleSectionsEl.reduce((closest, el) => {
        const elBottomPosition =
            el.getBoundingClientRect().bottom - actionsHeight;
        const closestBottomPosition =
            closest.getBoundingClientRect().bottom - actionsHeight;

        return elBottomPosition < closestBottomPosition ? el : closest;
    }, visibleSectionsEl[0]);
};

export const setActiveSectionByElementPosition = () => {
    if (isProgrammaticScroll) return;

    const scrollPositionIsAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

    const activeSectionEl = scrollPositionIsAtBottom
        ? getBottommostDisplayedSectionEl()
        : getVisibleSectionEl();
        
    if (activeSectionEl) {
        activeMenuSectionId = Number(activeSectionEl.getAttribute("data-id"));
        notify();
    }
};

const onScrollEnd = () => {
    isProgrammaticScroll = false;
};

const onActionsHeightChange = () => {
    setActiveSectionByElementPosition();
};

window.addEventListener("scroll", setActiveSectionByElementPosition);
window.addEventListener("scrollend", onScrollEnd);
subscribeActionsHeight(onActionsHeightChange);