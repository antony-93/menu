import { renderMenu } from "./menu";
import { searchMenuItemsByText } from "./store/menu";

export const createSearchMenuItemInput = () => {
    const el = document.createElement('form');

    el.classList.add('search-menu-item');
    el.addEventListener('input', (e) => {
        searchMenuItemsByText(e.target?.value);
        renderMenu();
    });

    el.innerHTML = `
        <div class="field">
            <input
                name="search"
                type="text"
                placeholder="Buscar drinks, pratos, sobremesas..."
            />
            <span class="material-symbols-outlined">search</span>
        </div>
    `

    return el;
}