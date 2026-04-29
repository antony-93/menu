const listeners = [];

export const subscribe = (listener) => {
    listeners.push(listener);
}

const notify = () => {
    listeners.forEach(listener => listener(menuActionsHeight));
}

let menuActionsHeight = 0;

export const getMenuActionsHeight = () => {
    return menuActionsHeight;
}

export const setMenuActionsHeight = (height) => {
    if (height != null) {
        menuActionsHeight = height;
        notify();
    }

}