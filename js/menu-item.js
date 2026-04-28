import { moneyFormat } from "./utils/moneyFormat";

const createMenuItemDescription = (description) => {
    const el = document.createElement('p');
    el.textContent = description;
    return el;
}

export const createMenuItem = (item) => {
    const el = document.createElement('article');

    el.classList.add('menu-item');
    el.innerHTML = `
        <header>
            <h4>${item.name}</h4>

            <div class="division"></div>

            <data value="${item.price}">
                <strong>${moneyFormat(item.price)}</strong>
            </data>
        </header>
    `

    if (item.description) {
        el.appendChild(createMenuItemDescription(item.description));
    }

    return el;
}