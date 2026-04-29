history.replaceState(null, null, ' ');
history.scrollRestoration = 'manual'

Promise.all([
    import('./menu'),
    import('./menu-actions')
]).then(([{ renderMenu }, { renderMenuActions }]) => {
    renderMenu()
    renderMenuActions()
});